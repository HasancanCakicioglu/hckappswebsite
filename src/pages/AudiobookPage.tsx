import React, { useState, useEffect, useRef } from 'react';
import { FaMusic, FaPaperPlane, FaRobot } from 'react-icons/fa';

interface BookSegment {
    Content: string;
    AudioContent: string;
    SequenceIndex: number;
}

interface Message {
    role: 'user' | 'assistant';
    text: string;
}

const AudiobookPage: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [loginError, setLoginError] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const [segments, setSegments] = useState<BookSegment[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [cursorInfo, setCursorInfo] = useState<{ index: number, char: number } | null>(null);
    const [cursorCoords, setCursorCoords] = useState<{ x: number, y: number, height: number } | null>(null);
    const [showHelp, setShowHelp] = useState(false);
    const [hasSeenHelp, setHasSeenHelp] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', text: 'Spoiler-free AI asistanı hazır. Mor imleci istediğiniz noktaya getirip sorunuzu sorabilirsiniz.' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isAsking, setIsAsking] = useState(false);
    const chatScrollRef = useRef<HTMLDivElement>(null);
    const bookScrollRef = useRef<HTMLDivElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);

    const BACKEND_URL = "https://audiobook.api.hckapps.com";

    useEffect(() => {
        const token = localStorage.getItem('audiobook_token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        if (!isLoggedIn) return;

        fetch('/lotr-tr.json')
            .then(res => res.json())
            .then(data => {
                // Showing the entire book as requested
                setSegments(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Veri yükleme hatası:", err);
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
            } else {
                setLoginError(result.message || 'Giriş başarısız. Lütfen bilgileri kontrol edin.');
            }
        } catch (err) {
            setLoginError('Sunucuya bağlanılamadı. Lütfen internetinizi veya sunucu durumunu kontrol edin.');
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

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.key)) {
            e.preventDefault();
        }
    };

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || !isLoggedIn || isLoggingIn || isAsking) return;
        
        setIsAsking(true);
        setMessages(prev => [...prev, { role: 'user', text: inputValue }]);
        const question = inputValue;
        setInputValue('');

        // Prepare Context (Last 600 characters before the cursor)
        let context = "";
        if (cursorInfo) {
            const currentSegIdx = segments.findIndex(s => s.SequenceIndex === cursorInfo.index);
            if (currentSegIdx !== -1) {
                // Get text from current segment before cursor
                context = segments[currentSegIdx].AudioContent.substring(0, cursorInfo.char);
                
                // If not enough, go backwards
                let lookback = currentSegIdx - 1;
                while (context.length < 600 && lookback >= 0) {
                    context = segments[lookback].AudioContent + context;
                    lookback--;
                }
                context = context.slice(-600); // Keep only last 600
            }
        }

        try {
            const token = localStorage.getItem('audiobook_token');
            const params = new URLSearchParams({
                q: question,
                bookid: "4",
                seq: cursorInfo ? cursorInfo.index.toString() : "0",
                context: context
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
                text: result.answer || 'Üzgünüm, şu an cevap veremiyorum.' 
            }]);
        } catch (err) {
            setMessages(prev => [...prev, { 
                role: 'assistant', 
                text: 'Sistemsel bir hata oluştu. Lütfen bağlantınızı kontrol edin.' 
            }]);
        } finally {
            setIsAsking(false);
        }
    };

    const openHelp = () => {
        setShowHelp(true);
        setHasSeenHelp(true);
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
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-purple-500/20 mx-auto mb-6 transform rotate-12 group">
                             <FaMusic className="text-white text-3xl" />
                        </div>
                        <h1 className="text-4xl font-black tracking-tighter uppercase tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 font-mono">AUDIOBOOK AI</h1>
                        <p className="text-gray-500 mt-4 font-medium uppercase tracking-widest text-xs">Erişim için yetkilendirme gerekiyor</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="relative group">
                            <input 
                                type="text"
                                value={loginData.username}
                                onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                                placeholder="Kullanıcı Adı"
                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-6 px-8 text-white focus:outline-none focus:border-purple-500/50 transition-all placeholder:text-gray-700"
                                required
                            />
                        </div>
                        <div className="relative group">
                            <input 
                                type="password"
                                value={loginData.password}
                                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                                placeholder="Şifre"
                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-6 px-8 text-white focus:outline-none focus:border-purple-500/50 transition-all placeholder:text-gray-700"
                                required
                            />
                        </div>

                        {loginError && (
                            <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm py-4 px-6 rounded-2xl animate-shake">
                                {loginError}
                            </div>
                        )}

                        <button 
                            type="submit"
                            disabled={isLoggingIn}
                            className="w-full py-6 bg-purple-600 hover:bg-purple-500 text-white font-black uppercase tracking-[0.2em] rounded-2xl transition-all shadow-xl shadow-purple-900/20 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            {isLoggingIn ? (
                                <div className="flex items-center justify-center gap-3">
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    <span>GİRİŞ YAPILIYOR</span>
                                </div>
                            ) : (
                                "SİSTEME GİRİŞ YAP"
                            )}
                        </button>
                    </form>
                    <p className="text-center text-[10px] text-gray-700 mt-10 font-bold uppercase tracking-[0.3em] opacity-40">AUDIOBOOK AI VERI KORUMA SISTEMI V1.0</p>
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen w-full bg-[#050505] text-white flex flex-col overflow-hidden font-sans border-t border-purple-500/20">
            <nav className="h-16 md:h-20 shrink-0 flex items-center justify-between px-4 md:px-10 bg-black/40 backdrop-blur-xl border-b border-white/5 z-50">
                <div className="w-1/3 md:w-1/4 flex items-center gap-2 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 shrink-0">
                        <FaMusic className="text-white text-sm md:text-lg" />
                    </div>
                    <div>
                        <h1 className="text-sm md:text-xl font-black tracking-tight leading-none uppercase md:tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-mono truncate">AUDIOBOOK AI</h1>
                    </div>
                </div>

                <div className="flex-grow flex justify-center">
                    <button 
                        onClick={openHelp}
                        className={`w-10 h-10 md:w-14 md:h-14 bg-purple-600 rounded-full flex items-center justify-center transition-all select-none relative ${!hasSeenHelp ? 'shadow-[0_0_40px_#a855f7] animate-[pulse_0.4s_infinite] border-2 border-white/20' : 'bg-white/5 border border-white/10 opacity-70 hover:opacity-100 hover:bg-purple-600/20'}`}
                    >
                         <span className={`text-xl md:text-3xl font-black italic ${!hasSeenHelp ? 'text-white' : 'text-purple-500'}`}>?</span>
                         {!hasSeenHelp && (
                            <div className="absolute inset-0 rounded-full border-2 border-purple-500 animate-[ping_0.4s_infinite] opacity-40" />
                         )}
                    </button>
                </div>
                
                <div className="w-1/3 md:w-1/4 flex items-center justify-end gap-2 md:gap-6">
                    {cursorInfo && (
                        <div className="bg-transparent border border-purple-500/40 px-3 md:px-5 py-1.5 md:py-2 rounded-xl md:rounded-2xl flex items-center gap-2 md:gap-3 animate-fade-in shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                            <span className="text-[8px] md:text-[9px] uppercase font-black text-purple-400 tracking-[0.2em] hidden sm:inline">IMLEÇ:</span>
                            <span className="text-xs md:text-lg font-mono font-bold text-white tracking-widest leading-none">[{cursorInfo.index}:{cursorInfo.char}]</span>
                        </div>
                    )}
                </div>
            </nav>

            {showHelp && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-2xl px-6"
                    onClick={() => setShowHelp(false)}
                >
                    <div 
                        className="max-w-xl w-full bg-[#0a0a0a] border border-purple-500/20 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 shadow-[0_0_150px_rgba(168,85,247,0.2)] animate-fade-in"
                        onClick={e => e.stopPropagation()}
                    >
                        <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-white mb-6">AUDIOBOOK AI [PROTOTİP]</h2>
                        
                        <div className="space-y-4 md:space-y-6 text-gray-400 text-sm md:text-lg leading-relaxed">
                            <p className="text-white font-bold italic underline decoration-purple-500 underline-offset-8">Bu bir prototiptir. AI asla spoiler vermez.</p>
                            <p>İmleci istediğiniz bir noktaya getirip tıklayın ve soru sorun; ai size spoiler vermeden imleçten önceki bilgileri kullanarak cevap verecektir.</p>
                            <p>İsterseniz imleci kitabın en sonuna getirip en başından bir şey sormayı deneyebilirsiniz.</p>
                            <p>Şuanlık geçmiş konuşmaları hatırlamıyor, her sorunuz öncekilerden bağımsız olarak değerlendiriliyor.</p>
                        </div>

                        <button 
                            onClick={() => setShowHelp(false)}
                            className="mt-10 w-full py-5 bg-purple-600 hover:bg-purple-700 rounded-xl font-black uppercase tracking-widest text-[13px] transition-all text-white border border-white/10"
                        >
                            TAMAM
                        </button>
                    </div>
                </div>
            )}

            <div className="flex-grow flex flex-col md:flex-row min-h-0 relative">
                <div className="flex-[2] flex flex-col min-h-0 bg-[#070707] selection:bg-purple-600 selection:text-white">
                    <div 
                        ref={bookScrollRef}
                        contentEditable={!isLoading}
                        suppressContentEditableWarning={true}
                        onKeyUp={updateCursorPosition}
                        onMouseUp={updateCursorPosition}
                        onKeyDown={handleKeyDown}
                        className="flex-grow overflow-y-auto px-6 md:px-24 py-8 md:py-16 scroll-smooth custom-sidebar cursor-text outline-none caret-transparent"
                    >
                        <div ref={textContainerRef} className="max-w-4xl mx-auto relative pt-4 md:pt-10">
                            <div className="mb-8 md:mb-16 border-l-4 border-purple-500 pl-4 md:pl-8 pointer-events-none select-none">
                                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-[0.2em] mb-2 leading-tight">Yüzük Kardeşliği</h2>
                                <p className="text-gray-500 text-[10px] md:text-sm font-bold tracking-widest uppercase">The Fellowship of the Ring • Content Segmented v1</p>
                            </div>

                            {cursorCoords && (
                                <div 
                                    className="absolute bg-purple-500 w-[3px] shadow-[0_0_10px_#a855f7,0_0_20px_#a855f7] animate-[laser_0.7s_infinite] pointer-events-none z-20"
                                    style={{ 
                                        left: cursorCoords.x, 
                                        top: cursorCoords.y, 
                                        height: cursorCoords.height 
                                    }}
                                />
                            )}

                            {isLoading ? (
                                <div className="flex items-center justify-center py-20">
                                    <div className="w-16 h-[2px] bg-purple-500 animate-pulse" />
                                </div>
                            ) : (
                                <article className="prose prose-invert prose-lg max-w-none">
                                    <div className="text-gray-400 font-serif space-y-8 text-xl md:text-2xl leading-[1.9] tracking-normal selection:bg-purple-600/50">
                                        {segments.map((seg, idx) => (
                                            <span 
                                                key={idx} 
                                                data-index={seg.SequenceIndex}
                                                className="mr-1.5"
                                            >
                                                {seg.AudioContent}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="h-60" />
                                </article>
                            )}
                        </div>
                    </div>
                </div>

                <div className="hidden md:block w-px bg-white/5 h-full" />

                <aside className="flex-1 flex flex-col min-h-0 bg-black/60 backdrop-blur-[60px] border-l border-white/5">
                    <div className="p-8 border-b border-white/5 bg-white/[0.02] flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-3">
                             <div className="h-2 w-2 rounded-full bg-purple-500/40" />
                             <h3 className="font-bold uppercase tracking-widest text-[11px] text-gray-400">AUDIO ASSISTANT</h3>
                        </div>
                        {cursorInfo && (
                            <div className="text-[10px] font-mono font-bold bg-purple-600/10 text-purple-400 px-3 py-1 rounded-full uppercase border border-purple-500/20">
                                LOC: {cursorInfo.index}:{cursorInfo.char}
                            </div>
                        )}
                    </div>

                    <div 
                        ref={chatScrollRef}
                        className="flex-grow overflow-y-auto p-4 md:p-8 space-y-6 md:space-y-8 custom-sidebar"
                    >
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                                <div className={`max-w-[90%] md:max-w-[85%] group`}>
                                    <div className={`p-4 md:p-6 rounded-2xl md:rounded-3xl text-sm md:text-[15px] leading-relaxed transition-all ${
                                        msg.role === 'user' 
                                            ? 'bg-purple-600/20 border border-purple-500/30 text-white shadow-lg shadow-purple-900/10 rounded-tr-none' 
                                            : 'bg-white/[0.03] border border-white/5 text-gray-300 rounded-tl-none group-hover:bg-white/[0.05]'
                                    }`}>
                                        {msg.text}
                                    </div>
                                    <div className={`text-[8px] md:text-[9px] uppercase tracking-widest font-black mt-2 text-gray-600 flex items-center gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        {msg.role === 'assistant' && <FaRobot className="text-purple-500" />}
                                        {msg.role === 'user' ? 'Gezgin' : 'AI Odak'}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 bg-white/[0.02] border-t border-white/5">
                        <form onSubmit={handleSendMessage} className="relative group">
                            <input 
                                type="text" 
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                disabled={isAsking}
                                placeholder={isAsking ? "Asistan düşünüyor..." : "Bir detay veya karakter sor..."} 
                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-7 pr-16 text-white text-[15px] focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all placeholder:text-gray-600 disabled:opacity-50"
                            />
                            <button 
                                type="submit"
                                disabled={isAsking}
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-purple-600 hover:bg-purple-500 rounded-xl flex items-center justify-center transition-all shadow-lg shadow-purple-900/20 active:scale-95 disabled:opacity-50"
                            >
                                {isAsking ? (
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <FaPaperPlane className="text-white text-xs" />
                                )}
                            </button>
                        </form>
                        <p className="mt-4 text-center text-[9px] text-gray-700 uppercase tracking-widest font-black">
                            Mor imlece göre gerçek zamanlı analiz
                        </p>
                    </div>
                </aside>
            </div>

            <style>{`
                .custom-sidebar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-sidebar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-sidebar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                }
                .custom-sidebar:hover::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.15);
                }
                @keyframes laser {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                @keyframes loading {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                @media (max-width: 768px) {
                    .flex-grow.flex-col.md\\:flex-row { flex-direction: column !important; }
                    aside { height: 400px; flex: none !important; }
                }
            `}</style>
        </div>
    );
};

export default AudiobookPage;
