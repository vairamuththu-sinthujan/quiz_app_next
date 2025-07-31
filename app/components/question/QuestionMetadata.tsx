// app/components/question/QuestionMetadata.tsx
import React from 'react';
import {Clock, Target, Star, Calendar, Tag, Database, Zap, Code, Brain, HardHat} from 'lucide-react';

interface QuestionMetadataProps {
    metadata: {
        title: string;
        description: string;
        level: 'easy' | 'medium' | 'hard';
        timeEstimate: string;
        algorithm: string;
        dataStructure: string;
        technique: string;
        concept: string;
        tags: string[];
        createdAt: string;
        attempts: number;
        score: number;
        status: 'new' | 'in-progress' | 'completed';
    };
}

const QuestionMetadata: React.FC<QuestionMetadataProps> = ({ metadata }) => {
    const getDifficultyColor = (level: string) => {
        switch (level) {
            case 'easy': return 'text-green-400';
            case 'medium': return 'text-yellow-400';
            case 'hard': return 'text-red-400';
            default: return 'text-gray-400';
        }
    };


    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className=" border-gray-700 rounded-2xl p-6 mb-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start justify-between mb-6">
                <div className="flex-1">
                    <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{metadata?.title}</h1>
                    <p className="text-gray-300 text-lg leading-relaxed">{metadata?.description}</p>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                            <HardHat className={`w-5 h-5  ${getDifficultyColor(metadata?.level)}`} />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Level</p>
                            <p className="text-white font-semibold">{metadata?.level}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                            <Clock className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Time Estimate</p>
                            <p className="text-white font-semibold">{metadata?.timeEstimate}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Created</p>
                            <p className="text-white font-semibold">{formatDate(metadata?.createdAt)}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Topics Section */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4">Topics & Concepts</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Left Column */}
                    <div className="space-y-4">
                        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                            <div className="flex items-center space-x-3 mb-3">
                                <Database className="w-5 h-5 text-blue-400" />
                                <h4 className="text-white font-semibold">Data Structure</h4>
                            </div>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium">
                                {metadata?.dataStructure}
                            </span>
                        </div>

                        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                            <div className="flex items-center space-x-3 mb-3">
                                <Zap className="w-5 h-5 text-orange-400" />
                                <h4 className="text-white font-semibold">Algorithm</h4>
                            </div>
                            <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-lg text-sm font-medium">
                                {metadata?.algorithm}
                            </span>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                            <div className="flex items-center space-x-3 mb-3">
                                <Code className="w-5 h-5 text-purple-400" />
                                <h4 className="text-white font-semibold">Technique</h4>
                            </div>
                            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-lg text-sm font-medium">
                                {metadata?.technique}
                            </span>
                        </div>

                        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                            <div className="flex items-center space-x-3 mb-3">
                                <Brain className="w-5 h-5 text-cyan-400" />
                                <h4 className="text-white font-semibold">Concept</h4>
                            </div>
                            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-lg text-sm font-medium">
                                {metadata?.concept}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Tags */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-3">
                        <Tag className="w-5 h-5 text-gray-400" />
                        <h4 className="text-white font-semibold">Tags</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {metadata?.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-gray-300 border border-gray-600 rounded-lg text-sm font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionMetadata;