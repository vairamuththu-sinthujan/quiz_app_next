'use client'
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeDisplayProps {
    pythonCode: string;
}

const CodeDisplayComponent: React.FC<CodeDisplayProps> = ({ pythonCode }) => {
    const [copied, setCopied] = useState(false);

    // --- THE FIX IS HERE ---
    // 1. Create a new style object by spreading the imported theme.
    // 2. Target the specific part of the theme that styles the <pre> tag.
    // 3. Override only the backgroundColor property.
    const codeTheme = {
        ...materialOceanic,
        'pre[class*="language-"]': {
            ...materialOceanic['pre[class*="language-"]'],
            backgroundColor: "transparent", // Set your desired background color here
        },
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const lineCount = pythonCode?.split('\n').length;

    return (
        <div className="">
            <h1 className='font-bold sm:text-2xl my-8'>Answer:</h1>
            <div className="max-w-4xl mx-auto">
                <div className="rounded-lg shadow-2xl overflow-hidden border border-gray-400">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-gray-400 px-4 py-2">
                        <h2 className="text-sm font-medium text-gray-300">
                            main.py
                        </h2>
                        <button
                            onClick={() => copyToClipboard(pythonCode)}
                            className="p-2 text-gray-400 hover:text-white hover:bg-gray-400 rounded transition-colors"
                            title="Copy code"
                            aria-label="Copy code to clipboard"
                        >
                            {copied ? <Check size={16} /> : <Copy size={16} />}
                        </button>
                    </div>
                    {/* Code content */}
                    <SyntaxHighlighter
                        language="python"
                        style={codeTheme} // Use the modified theme object
                        showLineNumbers={true}
                        // The customStyle prop has been removed to prevent the conflict
                        codeTagProps={{
                            style: {
                                fontFamily: '"Fira Code", "Dank Mono", monospace',
                                fontSize: '0.9rem',
                                lineHeight: '1.5',
                            }
                        }}
                    >
                        {pythonCode}
                    </SyntaxHighlighter>
                    {/* Footer */}
                    <div className=" px-4 py-2 border-t border-gray-400">
                        <div className="flex items-center justify-between text-sm text-gray-400">
                            <span>Python</span>
                            <span>Lines: {lineCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeDisplayComponent;