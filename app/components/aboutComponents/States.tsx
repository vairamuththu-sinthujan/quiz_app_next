import React from 'react'
import {Brain, Clock, Trophy, Users} from "lucide-react";

const States = () => {

    const stats = [
        { icon: <Users className="w-6 h-6" />, value: "Soon", label: "Active Learners" },
        { icon: <Brain className="w-6 h-6" />, value: "∞", label: "Questions Ready" },
        { icon: <Clock className="w-6 h-6" />, value: "24/7", label: "Available" },
        { icon: <Trophy className="w-6 h-6" />, value: "Beta", label: "Version" }
    ];
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-white/5 backdrop-blur-sm rounded-lg mb-4 group-hover:bg-white/10 transition-all duration-300">
                            <div className="text-cyan-400">
                                {stat.icon}
                            </div>
                        </div>
                        <div className="text-2xl md:text-3xl font-bold mb-2">{stat.value}</div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default States
