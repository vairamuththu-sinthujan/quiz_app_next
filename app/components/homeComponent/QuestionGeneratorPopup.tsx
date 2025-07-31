import React, {Dispatch, useState} from 'react';
import {X, Sparkles, Code, Database, Brain, Zap, Loader} from 'lucide-react';
import {algorithms, concepts, dataStructures, difficulty, technique} from "@/utils/rawDatas";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createQuestion} from "@/libs/api/mutationFunctions";

const QuestionGeneratorModal =  ({isOpen, setIsOpen,userId} : {isOpen:boolean,setIsOpen:Dispatch<React.SetStateAction<boolean>>,userId:string}) => {
    const [question,setQuestion] = useState({
        level: 'easy',
        dataStructure: 'Arrays',
        algorithm: 'Dynamic Programming',
        technique:'Two Pointers',
        concept: 'Math',
    })
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationKey:['createQuestion'],
        mutationFn: () => createQuestion(question,userId),
        onSuccess: () => {
            setIsOpen(false);
            void queryClient.invalidateQueries({queryKey:['questions'],})
        },
        onError: (error:any) => {
            console.log(error);
            alert(error.message);
    }
    })

    return (
        <div className={`${isOpen ? "visible" : "hidden"} fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4`}>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">Generate AI Question</h2>
                            <p className="text-gray-400 text-sm">Create a personalized coding challenge</p>
                        </div>
                    </div>
                    <button className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-xl flex items-center justify-center transition-colors"
                            disabled={mutation.isPending}
                            onClick={() => setIsOpen(false)}
                    >
                        <X className="w-5 h-5 text-gray-300" />
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    {/*/!* Instructions *!/*/}
                    {/*<div>*/}
                    {/*    <label className="text-white font-semibold mb-3 flex items-center">*/}
                    {/*        <Brain className="w-5 h-5 mr-2 text-cyan-400" />*/}
                    {/*        AI Instructions (Optional)*/}
                    {/*    </label>*/}
                    {/*    <textarea*/}
                    {/*        placeholder="e.g., Create a problem about finding duplicates in an array using optimal time complexity..."*/}
                    {/*        className="w-full bg-gray-800 border border-gray-600 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none h-24"*/}
                    {/*    />*/}
                    {/*    <p className="text-gray-400 text-sm mt-2">Provide specific requirements or constraints for your question</p>*/}
                    {/*</div>*/}

                    {/* Difficulty */}
                    <div>
                        <label className="text-white font-semibold mb-3 flex items-center">
                            <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                            Difficulty Level
                        </label>
                        <div className="flex space-x-3">
                            {
                                difficulty.map((level, index) => (
                                    <button
                                        onClick={() => setQuestion((prev) => ({...prev, level}))}
                                        key={index}
                                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white ${question.level === level && level =='easy' ? "bg-green-400 text-white hover:bg-green-400 scale-105" : question.level == level && level == 'medium' ? "bg-yellow-300 text-white hover:bg-yellow-300 scale-105" : question.level == level && level == 'hard' ? "bg-red-400 text-white hover:bg-red-400 scale-105" : ""}`}
                                    >
                                        <span>{level.toUpperCase()}</span>
                                    </button>
                                ))
                            }
                        </div>
                    </div>

                    {/* Tags */}
                    <div>
                        <label className="text-white font-semibold mb-3 flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-400" />
                            Select Topics (3 selected)
                        </label>

                        {/* Data Structures */}
                        <div className="mb-4">
                            <h4 className="text-gray-300 font-medium mb-2 flex items-center">
                                <Database className="w-4 h-4 mr-2" />
                                Data Structures
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {
                                    dataStructures.map((ds, index) => (
                                        <button key={index} className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white ${question.dataStructure == ds.name ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg transform scale-105" : ""}`}
                                        onClick={() => setQuestion((prev) => ({...prev, dataStructure:ds.name}))}
                                        >
                                            <span>{ds.icon}</span>
                                            <span>{ds.name}</span>
                                        </button>
                                    ))
                                }
                            </div>
                        </div>

                        {/* Algorithms */}
                        <div className="mb-4">
                            <h4 className="text-gray-300 font-medium mb-2 flex items-center">
                                <Database className="w-4 h-4 mr-2" />
                                Algorithms
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {
                                    algorithms.map((alg, index) => (
                                        <button key={index} className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white ${question.algorithm == alg.name ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg transform scale-105" : ""}`}
                                                onClick={() => setQuestion((prev) => ({...prev, algorithm:alg.name}))}
                                        >
                                            <span>{alg.icon}</span>
                                            <span>{alg.name}</span>
                                        </button>
                                    ))
                                }
                            </div>
                        </div>

                        {/* Techniques */}
                        <div className="mb-4">
                            <h4 className="text-gray-300 font-medium mb-2 flex items-center">
                                <Database className="w-4 h-4 mr-2" />
                                Techniques
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {
                                    technique.map((tech, index) => (
                                        <button
                                            key={index}
                                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white ${question.technique == tech.name ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg transform scale-105" : ""}`}
                                            onClick={() => setQuestion((prev) => ({...prev, technique:tech.name}))}
                                        >
                                            <span>{tech.icon}</span>
                                            <span>{tech.name}</span>
                                        </button>
                                    ))
                                }
                            </div>
                        </div>

                        {/* Concepts */}
                        <div className="mb-4">
                            <h4 className="text-gray-300 font-medium mb-2 flex items-center">
                                <Database className="w-4 h-4 mr-2" />
                                Concepts
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {
                                    concepts.map((con, index) => (
                                        <button
                                            key={index}
                                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white ${question.concept == con.name ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg transform scale-105" : ""}`}
                                            onClick={() => setQuestion((prev) => ({...prev, concept: con.name}))}
                                        >
                                            <span>{con.icon}</span>
                                            <span>{con.name}</span>
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    {/* Generate Button */}
                    <div className="pt-6 border-t border-gray-700">
                        <button className="w-full py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                                disabled={mutation.isPending}
                                onClick={() => mutation.mutate()}
                        >
                            {
                                mutation.isPending ? (<Loader className='animate-spin'/>) : (<Sparkles className="w-6 h-6" />)
                            }
                            <span>{mutation.isPending?"Generating Question": "Generate Question"}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionGeneratorModal;