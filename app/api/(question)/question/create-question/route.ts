import {NextRequest, NextResponse} from "next/server";
import {adminDb} from "@/libs/firebase/serverAuth";
import {handleAIChat} from "@/libs/gemini";

export const POST = async (req:NextRequest) => {
    try {
        const body = await req.json();
        const {uid, level, dataStructure, algorithm, technique, concept} = body;

        const userDocRef = adminDb.collection('users').doc(uid)

        const userSnapShot = await userDocRef.get();

        if (!userSnapShot.exists) {
            return new NextResponse(JSON.stringify({
                message: "User does not exist to add question",
                data: null,
                success: false,
            }), {status:400})
        }

        const questionType = {
            level:level,
            dataStructure:dataStructure,
            algorithm:algorithm,
            technique:technique,
            concept:concept,
        }

        const aiResponse  = await handleAIChat(questionType)
        const aiQuestion = aiResponse.response;

        const metaDataForQuestion = {
            ...questionType,
            timeEstimate:level.toLowerCase() == "easy" ? "25-30 min" : level.toLowerCase() == "medium" ? "45-60 min" : "60-90 min",
            tags:[questionType.algorithm,questionType.dataStructure,questionType.technique,questionType.concept],
            description:aiQuestion?.description,
            title:aiQuestion?.title,
            createdAt:new Date().toISOString(),
        }

        const questionAndAnswer = {
            question:aiQuestion?.question,
            answer:aiQuestion?.answer,
        }

        const fullQuestion = {
            metaDataForQuestion,
            questionAndAnswer,

        }

        const questionDocRef = await userDocRef.collection('questions').add({
            fullQuestion:fullQuestion
        })

        return new NextResponse(JSON.stringify({
            message: "Question added successfully",
            data: {questionDocRef},
            success: true,
        }))
    } catch (error:any) {
        console.error("Error creating question:", error);
        return new NextResponse(JSON.stringify({
            message: error.message || "Internal server error",
            data: null,
            success: false,
        }))
    }
}