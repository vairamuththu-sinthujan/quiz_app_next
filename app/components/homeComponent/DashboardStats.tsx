import React from 'react'
import {Brain, CheckCircle, Trophy, Zap} from "lucide-react";

const DashboardStats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                    <Brain className="w-8 h-8 text-purple-400" />
                    <span className="text-2xl font-bold text-purple-400">24</span>
                </div>
                <p className="text-gray-300 text-sm">Questions Generated</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                    <span className="text-2xl font-bold text-green-400">18</span>
                </div>
                <p className="text-gray-300 text-sm">Completed</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                    <Trophy className="w-8 h-8 text-yellow-400" />
                    <span className="text-2xl font-bold text-yellow-400">78%</span>
                </div>
                <p className="text-gray-300 text-sm">Average Score</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                    <Zap className="w-8 h-8 text-cyan-400" />
                    <span className="text-2xl font-bold text-cyan-400">5</span>
                </div>
                <p className="text-gray-300 text-sm">Day Streak</p>
            </div>
        </div>
    )
}
export default DashboardStats
