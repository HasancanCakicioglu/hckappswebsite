import React, { useState, useEffect, useRef } from 'react';
import { FaMusic, FaPaperPlane, FaRobot, FaVolumeUp, FaStop, FaPlay, FaPause } from 'react-icons/fa';

interface BookSegment {
    Content: string;
    AudioContent: string;
    SequenceIndex: number;
}

interface Message {
    role: 'user' | 'assistant';
    text: string;
}

const StorytelPage: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [loginError, setLoginError] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const [segments, setSegments] = useState<BookSegment[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [cursorInfo, setCursorInfo] = useState<{ index: number, char: number } | null>(null);
    const [cursorCoords, setCursorCoords] = useState<{ x: number, y: number, height: number } | null>(null);
    const [showHelp, setShowHelp] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', text: 'AI Assistant is ready. Place the purple cursor by clicking anywhere in the text, then ask your question.' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isAsking, setIsAsking] = useState(false);
    const [isReadingBook, setIsReadingBook] = useState(false);
    const chatScrollRef = useRef<HTMLDivElement>(null);
    const bookScrollRef = useRef<HTMLDivElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);

    const BACKEND_URL = "https://audiobook.api.hckapps.com";

    useEffect(() => {
        const token = localStorage.getItem('audiobook_token');
        if (token) {
            setIsLoggedIn(true);
            setShowHelp(true);
        }
    }, []);

    useEffect(() => {
        if (!isLoggedIn) return;

        fetch('/lotr-en.json')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter((s: BookSegment) => s.SequenceIndex >= 102);
                setSegments(filteredData);
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Data loading error:", err);
                setIsLoading(false);
            });
    }, [isLoggedIn]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError('');
        setIsLoggingIn(true);

        try {
            const response = await fetch(`${BACKEND_URL}/api/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginData)
            });

            const result = await response.json();

            if (result.success && result.token) {
                localStorage.setItem('audiobook_token', result.token);
                setIsLoggedIn(true);
                setShowHelp(true);
            } else {
                setLoginError(result.message || 'Login failed. Please check your credentials.');
            }
        } catch (err) {
            setLoginError('Could not connect to server.');
        } finally {
            setIsLoggingIn(false);
        }
    };

    const updateCursorPosition = () => {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0) return;

        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        const textContainer = textContainerRef.current;

        if (rect && textContainer) {
            const containerRect = textContainer.getBoundingClientRect();
            setCursorCoords({
                x: rect.left - containerRect.left,
                y: rect.top - containerRect.top,
                height: rect.height || 26
            });
        }

        const node = range.startContainer;
        let parent = node.parentElement;
        while (parent && !parent.getAttribute('data-index')) {
            parent = parent.parentElement;
        }

        if (parent) {
            const index = parseInt(parent.getAttribute('data-index') || '0');
            const charOffset = range.startOffset;
            setCursorInfo({ index, char: charOffset });
        }
    };

    const moveLaserToChar = (index: number, charOffset: number) => {
        const textContainer = textContainerRef.current;
        const segmentEl = textContainer?.querySelector(`[data-index="${index}"]`);
        
        if (segmentEl && textContainer) {
            const textNode = segmentEl.firstChild;
            if (!textNode) return;

            try {
                const range = document.createRange();
                const textLength = textNode.textContent?.length || 0;
                const safeOffset = Math.min(charOffset, textLength);
                
                range.setStart(textNode, safeOffset);
                range.setEnd(textNode, Math.min(safeOffset + 1, textLength));
                
                const rect = range.getBoundingClientRect();
                const containerRect = textContainer.getBoundingClientRect();
                
                if (rect.left !== 0) {
                    setCursorCoords({
                        x: rect.left - containerRect.left,
                        y: rect.top - containerRect.top,
                        height: rect.height || 26
                    });
                }

                if (charOffset === 0) {
                    segmentEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                
                setCursorInfo({ index, char: safeOffset });
            } catch (e) {
                const rect = segmentEl.getBoundingClientRect();
                const containerRect = textContainer.getBoundingClientRect();
                setCursorCoords({
                    x: rect.left - containerRect.left,
                    y: rect.top - containerRect.top,
                    height: rect.height || 26
                });
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.key)) {
            e.preventDefault();
        }
    };

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || !isLoggedIn || isLoggingIn || isAsking) return;
        
        const question = inputValue;
        setInputValue('');

        if (!cursorInfo) {
            setMessages(prev => [...prev, 
                { role: 'user', text: question },
                { role: 'assistant', text: 'Please click anywhere in the text first. I will answer using information prior to the cursor.' }
            ]);
            return;
        }

        setIsAsking(true);
        setMessages(prev => [...prev, { role: 'user', text: question }]);
        
        let context = "";
        const currentSegIdx = segments.findIndex(s => s.SequenceIndex === cursorInfo.index);
        if (currentSegIdx !== -1) {
            context = segments[currentSegIdx].AudioContent.substring(0, cursorInfo.char);
            let lookback = currentSegIdx - 1;
            while (context.length < 600 && lookback >= 0) {
                context = segments[lookback].AudioContent + context;
                lookback--;
            }
            context = context.slice(-600);
        }

        try {
            const token = localStorage.getItem('audiobook_token');
            const params = new URLSearchParams({
                q: question,
                bookid: "3",
                seq: cursorInfo.index.toString(),
                context: context,
                lang: "en"
            });

            const response = await fetch(`${BACKEND_URL}/api/ask?${params.toString()}`, {
                method: 'GET',
                headers: { 
                    'Authorization': token || '',
                    'Content-Type': 'application/json' 
                }
            });

            const result = await response.json();
            
            setMessages(prev => [...prev, { 
                role: 'assistant', 
                text: result.answer || 'Sorry, I cannot answer right now.' 
            }]);
        } catch (err) {
            setMessages(prev => [...prev, { 
                role: 'assistant', 
                text: 'System error. Please check your connection.' 
            }]);
        } finally {
            setIsAsking(false);
        }
    };

    const speakText = (text: string) => {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    };

    const stopSpeaking = () => {
        window.speechSynthesis.cancel();
        setIsReadingBook(false);
    };

    const readBookFromCursor = () => {
        if (segments.length === 0) return;
        window.speechSynthesis.cancel();
        setIsReadingBook(true);
        let startIdx = 0;
        let charStart = 0;

        if (cursorInfo) {
            startIdx = segments.findIndex(s => s.SequenceIndex === cursorInfo.index);
            charStart = cursorInfo.char;
            if (startIdx === -1) { startIdx = 0; charStart = 0; }
        }

        readSegmentRecursive(startIdx, charStart);
    };

    const readSegmentRecursive = (segIdx: number, charStart: number = 0) => {
        if (segIdx >= segments.length) {
            setIsReadingBook(false);
            return;
        }

        const segment = segments[segIdx];
        const textToRead = segment.AudioContent.substring(charStart);
        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;

        utterance.onboundary = (event) => {
            if (event.name === 'word') {
                moveLaserToChar(segment.SequenceIndex, charStart + event.charIndex);
            }
        };

        moveLaserToChar(segment.SequenceIndex, charStart);

        utterance.onend = () => {
             setTimeout(() => {
                if (window.speechSynthesis.speaking || window.speechSynthesis.pending) return;
                readSegmentRecursive(segIdx + 1, 0);
             }, 100);
        };
        
        utterance.onerror = () => setIsReadingBook(false);
        window.speechSynthesis.speak(utterance);
    };

    useEffect(() => {
        if (chatScrollRef.current) {
            chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
        }
    }, [messages]);

    if (!isLoggedIn) {
        return (
            <div className="h-screen w-full bg-[#050505] flex items-center justify-center font-sans p-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.08)_0%,_transparent_70%)] pointer-events-none" />
                <div className="max-w-md w-full animate-fade-in relative z-10">
                    <div className="text-center mb-12">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[2rem] flex items-center justify-center shadow-2xl mx-auto mb-6 transform rotate-12">
                             <FaMusic className="text-white text-3xl" />
                        </div>
                        <h1 className="text-4xl font-black tracking-tighter uppercase tracking-[0.3em] text-white font-mono">STORYTEL AI PROTOTYPE</h1>
                        <p className="text-gray-500 mt-4 font-medium uppercase tracking-widest text-xs">Authorization Required</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <input 
                            type="text"
                            value={loginData.username}
                            onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                            placeholder="Username"
                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-6 px-8 text-white focus:border-purple-500/50 transition-all placeholder:text-gray-700"
                            required
                        />
                        <input 
                            type="password"
                            value={loginData.password}
                            onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                            placeholder="Password"
                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-6 px-8 text-white focus:border-purple-500/50 transition-all placeholder:text-gray-700"
                            required
                        />

                        {loginError && (
                            <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm py-4 px-6 rounded-2xl animate-shake">
                                {loginError}
                            </div>
                        )}

                        <button 
                            type="submit"
                            disabled={isLoggingIn}
                            className="w-full py-6 bg-purple-600 hover:bg-purple-500 text-white font-black uppercase tracking-[0.2em] rounded-2xl transition-all shadow-xl shadow-purple-900/20"
                        >
                            {isLoggingIn ? "LOGGING IN..." : "ENTER SYSTEM"}
                        </button>
                    </form>
                    <p className="text-center text-[10px] text-gray-700 mt-10 font-bold uppercase tracking-[0.3em] opacity-40">STORYTEL AI PROTOTYPE DATA PROTECTION V1.0</p>
                </div>
            </div>
        );
    }

    return (
        <div lang="en" className="h-screen w-full bg-[#050505] text-white flex flex-col overflow-hidden font-sans border-t border-purple-500/20">
            <nav className="h-16 md:h-20 shrink-0 flex items-center justify-between px-4 md:px-10 bg-black/40 backdrop-blur-xl border-b border-white/5 z-50">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
                        <FaMusic className="text-white" />
                    </div>
                    <h1 className="text-xl font-black tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-mono">STORYTEL AI PROTOTYPE</h1>
                </div>

                <div className="flex items-center gap-4">
                    {!isReadingBook ? (
                         <button onClick={readBookFromCursor} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600/20 text-purple-400 transition-all">
                            <FaPlay />
                        </button>
                    ) : (
                        <button onClick={stopSpeaking} className="w-12 h-12 bg-red-600/20 border border-red-500/40 rounded-xl flex items-center justify-center text-red-500">
                            <FaPause />
                        </button>
                    )}
                </div>
                
                <div className="hidden md:flex bg-purple-600/10 border border-purple-500/20 px-5 py-2 rounded-2xl items-center gap-3">
                    <span className="text-[10px] font-black text-purple-400">CURSOR:</span>
                    <span className="font-mono font-bold leading-none">[{cursorInfo?.index || 0}:{cursorInfo?.char || 0}]</span>
                </div>
            </nav>

            {showHelp && (
                <div 
                    className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-3xl overflow-y-auto"
                    onClick={() => setShowHelp(false)}
                >
                    <div className="flex min-h-screen w-full items-start justify-center p-4 md:p-10 pointer-events-none">
                        <div 
                            className="max-w-5xl w-full bg-[#0a0a0a] border border-purple-500/20 rounded-[2.5rem] p-12 shadow-2xl relative pointer-events-auto my-auto"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-10">
                                <h2 className="text-3xl font-black uppercase tracking-widest text-white">STORYTEL AI PROTOTYPE SYSTEM</h2>
                                <button onClick={() => setShowHelp(false)} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors">✕</button>
                            </div>
                        
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                                <div className="space-y-6">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-500">WHAT IS IT?</h3>
                                    <div className="space-y-4 text-gray-400 text-sm md:text-lg leading-relaxed">
                                        <p className="text-white font-bold italic underline decoration-purple-500 underline-offset-8">This is a spoiler-free AI assistant designed to help with reading and listening.</p>
                                        <p>Prepared specifically for The Fellowship of the Ring.</p>
                                        <p>The core focus of this project is the AI assistant experience; therefore, the system's default voices are used for the text-to-speech engine.</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-500">HOW TO USE?</h3>
                                    <div className="space-y-4 text-gray-400 text-sm md:text-lg leading-relaxed">
                                        <p>Click anywhere in the text to set your cursor and ask a question; the AI will answer using information prior to that point without any spoilers.</p>
                                        <p>You can even move the cursor to the end of the book and ask about something from the very beginning.</p>
                                        <p>Currently, it does not remember past conversations; each question is evaluated independently.</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-500">WHY DID I BUILD THIS?</h3>
                                    <div className="space-y-4 text-gray-400 text-sm md:text-lg leading-relaxed italic border-l border-purple-500/30 pl-6">
                                        <p>After the Dune trailer came out, I decided to listen to epics like Lord of the Rings and Dune, but there were so many complex names, situations, and lore. If I missed one detail, the rest of the book didn't make sense.</p>
                                        <p>That's exactly why I developed this AI assistant; no matter where I am in the book, it analyzes only the parts I've "read" so far and answers my questions without spoilers.</p>
                                    </div>
                                </div>
                            </div>

                            <button onClick={() => setShowHelp(false)} className="mt-12 w-full py-5 bg-purple-600 hover:bg-purple-700 rounded-xl font-black uppercase text-white shadow-xl">START SYSTEM</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex-grow flex flex-col md:flex-row min-h-0 relative">
                <div className="flex-[3] flex flex-col min-h-0 bg-[#070707] selection:bg-purple-600">
                    <div 
                        ref={bookScrollRef}
                        contentEditable={!isLoading}
                        suppressContentEditableWarning={true}
                        spellCheck="false"
                        onKeyUp={updateCursorPosition}
                        onMouseUp={updateCursorPosition}
                        onKeyDown={handleKeyDown}
                        className="flex-grow overflow-y-auto px-6 md:px-24 py-8 md:py-16 scroll-smooth custom-sidebar cursor-text outline-none caret-transparent"
                    >
                        <div ref={textContainerRef} className="max-w-5xl mx-auto relative pt-10">
                            <div className="mb-16 border-l-4 border-purple-500 pl-8 pointer-events-none">
                                <h1 className="text-4xl font-black uppercase tracking-[0.2em] mb-2">The Fellowship of the Ring</h1>
                                <p className="text-gray-500 text-sm font-bold tracking-widest uppercase">The Lord of the Rings - Part I</p>
                            </div>

                            {cursorCoords && (
                                <div 
                                    className="absolute bg-purple-500 w-[3px] shadow-[0_0_15px_#a855f7] animate-[laser_0.7s_infinite] pointer-events-none z-20"
                                    style={{ left: cursorCoords.x, top: cursorCoords.y, height: cursorCoords.height }}
                                />
                            )}

                            {isLoading ? (
                                <div className="flex items-center justify-center py-20 text-purple-500">Loading Book...</div>
                            ) : (
                                <div className="text-gray-400 font-serif space-y-8 text-xl md:text-2xl leading-[1.9] tracking-normal">
                                    {segments.map((seg, idx) => (
                                        <span key={idx} data-index={seg.SequenceIndex} className="mr-1.5 transition-all duration-300">
                                            {seg.AudioContent}
                                        </span>
                                    ))}
                                </div>
                            )}
                            <div className="h-64" />
                        </div>
                    </div>
                </div>

                <aside className="flex-[2] flex flex-col min-h-0 bg-black/60 backdrop-blur-3xl border-l border-white/5">
                    <div className="p-8 border-b border-white/5 shrink-0 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
                            <h3 className="font-bold uppercase tracking-widest text-[11px] text-gray-400">PROTOTYPE AUDIO ASSISTANT</h3>
                        </div>
                    </div>

                    <div ref={chatScrollRef} className="flex-grow overflow-y-auto p-8 space-y-8 custom-sidebar">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                                <div className="max-w-[85%] group font-sans">
                                    <div className={`p-6 rounded-3xl text-[15px] leading-relaxed shadow-lg ${
                                        msg.role === 'user' 
                                            ? 'bg-purple-600/20 border border-purple-500/30 text-white rounded-tr-none' 
                                            : 'bg-white/[0.03] border border-white/5 text-gray-300 rounded-tl-none'
                                    }`}>
                                        {msg.text}
                                        {msg.role === 'assistant' && (
                                            <div className="mt-4 flex gap-2 border-t border-white/5 pt-3">
                                                <button onClick={() => speakText(msg.text)} className="flex items-center gap-2 text-[10px] font-black uppercase text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-lg border border-purple-500/20">
                                                    <FaVolumeUp /> LISTEN
                                                </button>
                                                <button onClick={stopSpeaking} className="flex items-center gap-2 text-[10px] font-black uppercase text-gray-500 hover:text-red-400 px-3 py-1.5 rounded-lg border border-white/5">
                                                    <FaStop /> STOP
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    <div className={`text-[9px] uppercase tracking-widest font-black mt-2 text-gray-600 flex items-center gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        {msg.role === 'assistant' ? <><FaRobot className="text-purple-500" /> PROTOTYPE AI</> : "TRAVELER"}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 bg-white/[0.02] border-t border-white/5">
                        <form onSubmit={handleSendMessage} className="relative">
                            <input 
                                type="text" 
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                disabled={isAsking}
                                placeholder={isAsking ? "Thinking..." : "What is Bilbo doing?..."} 
                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-7 pr-16 text-white text-[15px] focus:outline-none focus:border-purple-500/50 placeholder:text-gray-600"
                            />
                            <button type="submit" disabled={isAsking} className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-purple-600 hover:bg-purple-500 rounded-xl flex items-center justify-center transition-all">
                                {isAsking ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <FaPaperPlane className="text-white text-xs" />}
                            </button>
                        </form>
                    </div>
                </aside>
            </div>

            <style>{`
                .custom-sidebar::-webkit-scrollbar { width: 4px; }
                .custom-sidebar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.05); border-radius: 10px; }
                @keyframes laser { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
            `}</style>
        </div>
    );
};

export default StorytelPage;
