// Import necessary React components
import React from 'react'; 
import { FaGooglePlay } from 'react-icons/fa'; // Google Play Store ikonu için react-icons import et

function Apps() {
  return (
    <div className="bg-black text-white min-h-screen">
        {/* Logo and Scroll Button */}
        <div className="flex justify-center items-center py-8 mb-8">
            <a href="#details" className="cursor-pointer flex flex-col items-center">
                <img src="/apps/voidnote/voidnote.png" alt="VoidNote Logo" className="w-16 h-16 mb-2 border-2 border-white rounded-lg p-2 object-contain" />
                <p className="text-white mt-2 font-bold">VoidNote</p>{" "}
            </a>
        </div>
        
        {/* App Details Section */}
        <div id="details" className="bg-white text-black w-full">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#00df9a] mb-6">VoidNote</h1>
                    <p className="text-lg mb-6">VoidNote is a cutting-edge notebook application designed to simplify and organize your notes effectively. With advanced features like tree-structured notes, analysis tools, and more, it caters to all your organizational needs.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
                    {/* App Feature Example Cards */}
                    <div className="text-center">
                        <img src="/apps/voidnote/note_framed.png" alt="Note Example" className="w-full  object-cover" />
                        <div className="p-2">
                            <h3 className="text-md font-bold text-black mb-1">Note Example</h3>
                            <p className="text-black font-semibold text-sm">Create detailed notes with intuitive tools.</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <img src="/apps/voidnote/tree_framed.png" alt="Tree Notes" className="w-full  object-cover" />
                        <div className="p-2">
                            <h3 className="text-md font-bold text-black mb-1">Tree Notes</h3>
                            <p className="text-black font-semibold text-sm">Organize notes hierarchically for easy navigation.</p>
                        </div>
                    </div>
                    <div className=" text-center">
                        <img src="/apps/voidnote/analysis_framed.png" alt="Analysis Tools" className="w-full  object-cover" />
                        <div className="p-2">
                            <h3 className="text-md font-bold text-black mb-1">Analysis Tools</h3>
                            <p className="text-black font-semibold text-sm">Gain insights with built-in analytical tools.</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <img src="/apps/voidnote/calendar_framed.png" alt="Calendar Integration" className="w-full  object-cover" />
                        <div className="p-2">
                            <h3 className="text-md font-bold text-black mb-1">Calendar Integration</h3>
                            <p className="text-black font-semibold text-sm">Link notes with your calendar seamlessly.</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <img src="/apps/voidnote/todo_framed.png" alt="To-Do List Integration" className="w-full  object-cover" />
                        <div className="p-2">
                            <h3 className="text-md font-bold text-black mb-1">To-Do Lists</h3>
                            <p className="text-black font-semibold text-sm">Manage tasks with integrated to-do lists.</p>
                        </div>
                    </div>
                </div>
                {/* Google Play Store Button */}
                <div className="flex justify-center mt-8">
                    <a 
                        href="https://play.google.com/store/apps/details?id=com.hck.voidnote&hl=en" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xl text-white flex items-center justify-center bg-[#00df9a] hover:bg-[#00c87b] py-2 px-4 rounded-full"
                    >
                        <FaGooglePlay className="mr-2" /> Download on Google Play
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Apps;
