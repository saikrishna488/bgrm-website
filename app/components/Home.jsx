"use client";

import React from 'react';
import { Twitter, Youtube, MessageCircleMore } from 'lucide-react';

const handleTwitter = async () => {
    window.open('https://x.com/realbangaram');
}

const handleTelegram = async () => {
    window.open('https://t.me/bangaramofficial');
}

const handleYoutube = async () => {
    window.open('https://www.youtube.com/@realbangaram');
}

const Home = () => {
    return (
        <div className="bg-black min-h-screen flex flex-col justify-between text-white text-center">
            <div className="flex flex-col items-center justify-center flex-grow">
                <img
                    src="https://raw.githubusercontent.com/saikrishna488/Bangaram-project/refs/heads/main/icon.png"
                    alt="Bangaram Logo"
                    className="h-32 w-auto mb-6" // Logo size
                />
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to Bangaram</h1>
                <p className="text-base sm:text-lg mb-8 px-6">
                    Earn tokens through fun activities and community engagement!
                </p>

                <div className="flex space-x-4 mb-8">
                    <a
                        href="https://t.me/bgrmbot/bangaram"
                        className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 hover:shadow-xl"
                    >
                        Launch App
                    </a>
                </div>

                <div className="flex flex-col items-center mb-8">
                    <p className="text-lg">Join our community:</p>
                    <div className="flex space-x-4 mt-2">
                        <a onClick={handleTwitter} rel="noopener noreferrer">
                            <Twitter className="w-8 h-8 text-blue-400 hover:text-blue-600 transition duration-300" />
                        </a>
                        <a onClick={handleYoutube} rel="noopener noreferrer">
                            <Youtube className="w-8 h-8 text-red-500 hover:text-red-600 transition duration-300" />
                        </a>
                        <a onClick={handleTelegram} rel="noopener noreferrer">
                            <MessageCircleMore className="w-8 h-8 text-teal-500 hover:text-teal-600 transition duration-300" />
                        </a>
                    </div>
                </div>
            </div>

            <footer className="bg-gray-900 text-white py-4 text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Bangaram. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
