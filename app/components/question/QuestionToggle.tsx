'use client';

import React, { useState } from 'react';
import QuestionDisplay from "@/app/components/question/QuestionDisplay";
import CodeDisplay from "@/app/components/question/CodeDisplay";

interface CodeDisplayProps {
    pythonCode: string;
}


const QuestionToggle: React.FC<CodeDisplayProps> = ({ pythonCode }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="my-8">
            <button
                onClick={toggleVisibility}
                className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-white rounded-md transition-colors duration-200 font-medium"
            >
                <span>
                    {isVisible ? 'Hide' : 'Show'} Answer
                </span>
                <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isVisible ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <div
                className={`transition-all duration-500 ease-in-out ${
                    isVisible ? 'visible mt-4' : ' hidden'
                }`}
            >
                <div className="transform transition-transform duration-500 ease-in-out">
                    <CodeDisplay pythonCode={pythonCode}/>
                </div>
            </div>
        </div>
    );
};

export default QuestionToggle;