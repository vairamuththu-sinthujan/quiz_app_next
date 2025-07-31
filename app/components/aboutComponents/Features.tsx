import React from 'react'
import {Brain, Target, Trophy, Zap} from "lucide-react";

const Features = () => {

    const features = [
        {
            icon: <Brain className="w-8 h-8" />,
            title: "AI-Powered Questions",
            description: "Our advanced AI generates personalized quiz questions tailored to your learning level and interests.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Adaptive Learning",
            description: "Smart difficulty adjustment based on your performance to ensure optimal learning progression.",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Instant Feedback",
            description: "Get immediate detailed explanations and insights to accelerate your learning journey.",
            color: "from-orange-500 to-red-500"
        },
        {
            icon: <Trophy className="w-8 h-8" />,
            title: "Progress Tracking",
            description: "Monitor your improvement with detailed analytics and achievement milestones.",
            color: "from-green-500 to-emerald-500"
        }
    ];
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Quiz AI?</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Experience the future of learning with our innovative features designed to maximize your potential.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-gray-700 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-white/10">
                        <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <div className="text-white">
                                {feature.icon}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                            {feature.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {feature.description}
                        </p>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Features
