import React from 'react'
import {Sparkles} from "lucide-react";

const Hero = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute inset-0"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-6">
                        <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        About Quiz AI
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Revolutionizing learning through intelligent, personalized quiz experiences powered by cutting-edge AI technology.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Hero
