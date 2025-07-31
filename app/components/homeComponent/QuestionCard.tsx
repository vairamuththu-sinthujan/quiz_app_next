import React from 'react'
import {Play, Clock, CheckCircle, XCircle, Trash} from 'lucide-react';
import {QuestionCardProps} from "@/utils/props";

const QuestionCard = ({ question} : {question:QuestionCardProps | any} ) => {
    const getStatusIcon = (status : QuestionCardProps['status']) => {
        switch(status) {
            case 'completed':
                return <CheckCircle className="w-5 h-5 text-green-400" />;
            case 'attempted':
                return <XCircle className="w-5 h-5 text-yellow-400" />;
            default:
                return <Play className="w-5 h-5 text-gray-400" />;
        }
    };

    const getDifficultyColor = (diff : QuestionCardProps['difficulty']) => {
        switch(diff) {
            case 'easy':
                return 'text-green-400 bg-green-500/20';
            case 'medium':
                return 'text-yellow-400 bg-yellow-500/20';
            case 'hard':
                return 'text-red-400 bg-red-500/20';
            default:
                return 'text-gray-400 bg-gray-500/20';
        }
    };

    return (
        <div
            className={`group relative bg-white/5 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:bg-white/10`}
        >
            {/* Question Info */}
            <div className="mb-4">
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {question.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {question.description} ...
                </p>
            </div>

            {/* Difficulty and Time */}
            <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getDifficultyColor(question.level)}`}>
                    {question.level}
                </span>
                <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {question.timeEstimate}
                </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {question.tags.map((tag : any) => (
                    <span
                        key={tag}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded-md text-xs"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            {/* Attempts */}
            <div className="flex items-center justify-between text-sm text-gray-400">
                <button className="text-sm font-medium text-gray-300 cursor-pointer" onClick={() => {

                }}>
                    <Trash color='red'/>
                </button>
                <a href={`/question/${question.id}`} className="flex items-center space-x-2">
                    <Play className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                    <span className="group-hover:text-cyan-400 transition-colors">
                       Start
                    </span>
                </a>
            </div>
        </div>
    );
};
export default QuestionCard
