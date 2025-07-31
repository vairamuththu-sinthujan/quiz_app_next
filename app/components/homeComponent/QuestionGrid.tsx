'use client'
import React from 'react'
import QuestionCard from "@/app/components/homeComponent/QuestionCard"
import { Loader } from "lucide-react"
import {useQuery} from "@tanstack/react-query";
import {getQuestions} from "@/libs/api/queryFunctions";
import {useAuth} from "@/context/authContext";
import questionMetadata from "@/app/components/question/QuestionMetadata";

const QuestionGrid = () => {
    const {currentUser:user} = useAuth()
    const {data:question,isLoading} = useQuery({
        queryKey:['questions'],
        queryFn: () => getQuestions(user.uid)
    })

    if (isLoading) {
        return (
            <div className='w-full h-full flex justify-center items-center'>
                <Loader className='animate-spin' size={50}/>
            </div>
        )
    }

    if (question.data.length === 0) {
        return (
            <div className='w-full h-full flex justify-center items-center'>
                <p className="text-gray-400">No questions found. Generate your first question!</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {question.data.map((question: any) => (
                    <QuestionCard
                        key = {question.id}
                        question={{...question.metaDataForQuestion, id:question.id}}
                    />
            ))}
        </div>
    )
}

export default QuestionGrid