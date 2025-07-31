import React from 'react';
import { Code, Zap, BookOpen, Timer } from 'lucide-react';
import LandingPageAuthButton from "@/app/components/rootComponent/LandingPageAuthButton";
import Navbar from "@/app/components/rootComponent/Navbar";
const LandingPage =  async () => {

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="flex flex-col items-center text-center px-6 py-16 lg:py-24">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl leading-tight">
                    AI-Powered
                    <br />
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Coding Practice
          </span>
                    <br />
                    Platform
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl">
                    Master Programming with AI — Practice, Learn, and Build Your Skills
                </p>

                <LandingPageAuthButton/>

                {/* Hero Image/Illustration */}
                <div className="relative w-full max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-3xl p-8 lg:p-16 relative overflow-hidden">
                        {/* Abstract coding elements */}
                        <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center space-x-2">
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            <span className="text-sm font-mono text-white">AI Assistant</span>
                        </div>

                        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                            <Zap className="w-5 h-5 text-yellow-300" />
                        </div>

                        {/* Central figure silhouette */}
                        <div className="flex justify-center items-center h-64 lg:h-80">
                            <div className="w-32 h-32 lg:w-48 lg:h-48 bg-black/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                                <Code className="w-16 h-16 lg:w-24 lg:h-24 text-white/80" />
                            </div>
                        </div>

                        {/* Floating code snippets */}
                        <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                            <div className="text-xs font-mono text-white">
                                <div>function solve() {'{'}  </div>
                                <div className="ml-4">return ai.optimize();</div>
                                <div>{'}'}</div>
                            </div>
                        </div>

                        <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                            <span className="text-xs text-white">Practice Mode</span>
                        </div>

                        {/* Decorative clouds */}
                        <div className="absolute top-1/3 left-8 w-16 h-8 bg-white/10 rounded-full blur-sm"></div>
                        <div className="absolute top-1/2 right-8 w-20 h-10 bg-white/10 rounded-full blur-sm"></div>
                    </div>
                </div>
            </div>

            {/* Trusted by section */}
            <div className="px-6 py-16 border-t border-gray-400">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-center text-gray-400 text-lg mb-12">You Can Learn</h3>
                    <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60">
                        <div className="flex items-center space-x-2">
                            <BookOpen className="w-8 h-8" />
                            <span className="text-xl font-bold">Best Practices</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Code className="w-8 h-8" />
                            <span className="text-xl font-bold">Clean Code</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Zap className="w-8 h-8" />
                            <span className="text-xl font-bold">Problem Solving</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Timer className="w-8 h-8" />
                            <span className="text-xl font-bold">Time management</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
