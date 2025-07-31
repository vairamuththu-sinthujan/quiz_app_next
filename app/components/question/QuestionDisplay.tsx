import React from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {materialOceanic} from "react-syntax-highlighter/dist/esm/styles/prism";
import { CSSProperties } from 'react';

interface QuestionDisplayProps {
    question: string;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question }) => {

    const codeTheme = {
        ...materialOceanic,
        'pre[class*="language-"]': {
            ...materialOceanic['pre[class*="language-"]'],
            backgroundColor: "transparent",
            width: "100%",
            maxWidth: "100%",
            overflowX: "hidden", // Changed from auto to hidden
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            margin: 0,
            padding: "1rem",
        },
        'code[class*="language-"]': {
            ...materialOceanic['code[class*="language-"]'],
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            maxWidth: "100%",
        },
    } as { [key: string]: CSSProperties };

    return (
        <div className="w-full max-w-full overflow-hidden">
            <h1 className='font-bold sm:text-2xl mb-4'>Question:</h1>
            <div className="border border-gray-400 rounded-2xl p-6 overflow-hidden">
                <SyntaxHighlighter
                    language="c" // Changed to text for better wrapping
                    style={codeTheme}
                    showLineNumbers={false}
                    wrapLongLines={true}
                    lineProps={{
                        style: {
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-word',
                            overflowWrap: 'break-word',
                            maxWidth: '100%',
                        }
                    }}
                    codeTagProps={{
                        style: {
                            fontFamily: '"Fira Code", "Dank Mono", monospace',
                            fontSize: '0.9rem',
                            lineHeight: '1.6',
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-word',
                            overflowWrap: 'break-word',
                            maxWidth: '100%',
                        }
                    }}
                    customStyle={{
                        margin: 0,
                        padding: 0,
                        backgroundColor: 'transparent',
                        maxWidth: '100%',
                        overflow: 'hidden',
                    }}
                >
                    {question}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default QuestionDisplay;