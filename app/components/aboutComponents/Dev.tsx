import React from 'react'
import {Code, Coffee, Github, Linkedin, Mail, Target, Zap, User} from "lucide-react";

const Dev = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-white/5 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Developer</h2>
                    <p className="text-xl text-gray-300">
                        Passionate about creating innovative learning experiences
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-6">
                            <Code className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Sinthujan V
                        </h3>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            Full Stack Developer & AI Enthusiast passionate about leveraging technology to enhance education.
                            With expertise in modern web technologies and machine learning, I'm dedicated to creating
                            intuitive and powerful learning platforms.
                        </p>

                        <div className="flex justify-center md:justify-start space-x-4 mb-8">
                            <a href="https://github.com/vairamuththu-sinthujan" className="group inline-flex items-center justify-center w-12 h-12 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
                                <Github className="w-6 h-6 text-gray-400 group-hover:text-white" />
                            </a>
                            <a href="https://www.linkedin.com/in/vairamuththu-sinthujan/" className="group inline-flex items-center justify-center w-12 h-12 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
                                <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400" />
                            </a>
                            <a href="https://vairamuththusinthujan@gmail.com" type='email' className="group inline-flex items-center justify-center w-12 h-12 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
                                <Mail className="w-6 h-6 text-gray-400 group-hover:text-green-400" />
                            </a>
                            <a href="https://https://vairamuththu-sinthujan.vercel.app/" className="group inline-flex items-center justify-center w-12 h-12 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
                                <User className="w-6 h-6 text-gray-400 group-hover:text-red-400" />
                            </a>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="group bg-white/5 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-center mb-3">
                                <Coffee className="w-6 h-6 text-orange-400 mr-3" />
                                <h4 className="text-lg font-semibold">Tech Stack</h4>
                            </div>
                            <p className="text-gray-300">
                                React, Next.js, TypeScript, Node.js, Firebase, TailwindCSS, Python, AI/ML
                            </p>
                        </div>

                        <div className="group bg-white/5 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-center mb-3">
                                <Target className="w-6 h-6 text-green-400 mr-3" />
                                <h4 className="text-lg font-semibold">Mission</h4>
                            </div>
                            <p className="text-gray-300">
                                To democratize personalized learning through AI-powered educational tools
                            </p>
                        </div>

                        <div className="group bg-white/5 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-center mb-3">
                                <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                                <h4 className="text-lg font-semibold">Experience</h4>
                            </div>
                            <p className="text-gray-300">
                                2+ years in full-stack development with focus on educational technology
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dev
