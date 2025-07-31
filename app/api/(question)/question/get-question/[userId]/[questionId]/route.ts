import {NextRequest, NextResponse} from "next/server";
import {adminDb} from "@/libs/firebase/serverAuth";

export const GET = async (req:NextRequest,context: {params:Promise<{userId: string; questionId: string}>}) => {
    try {
        const {userId, questionId} = await context.params

        if (!userId || !questionId) {
            return new NextResponse(JSON.stringify({
                message: "id is required",
                data: null,
                success: false,
            }),{status:400})
        }

        const userDocRef = adminDb.collection('users').doc(userId)

        const userSnapShot = await userDocRef.get()

        if (!userSnapShot.exists) {
            return new NextResponse(JSON.stringify({
                message: "User does not exist",
                data: null,
                success: false,
            }))
        }

        const questionDocRef = userDocRef.collection('questions').doc(questionId)

        const questionSnapShot = await questionDocRef.get()

        if (!questionSnapShot.exists) {
            return new NextResponse(JSON.stringify({
                message: "Question does not exist",
                data: null,
                success: false,
            }))
        }

        const data = questionSnapShot.data()?.fullQuestion

        return new NextResponse(JSON.stringify({
            message: "Question fetched successfully",
            data: data,
            success: true,
        }), {status:200})


    }catch (error:any) {
        return new NextResponse(JSON.stringify({
            message: error.message,
            data: null,
            success: false,
        }),{status:500})
    }
}