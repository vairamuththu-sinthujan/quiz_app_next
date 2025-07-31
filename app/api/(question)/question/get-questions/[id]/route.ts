import {NextRequest, NextResponse} from "next/server";
import {adminDb} from "@/libs/firebase/serverAuth";

export const GET = async (req: NextRequest, context: { params: Promise<{ id: string }> }) => {
    try {
        const { id } = await context.params

        if (!id) {
            return new NextResponse(JSON.stringify({
                message: "id is required",
                data: null,
                success: false,
            }), {status:400})
        }
        const userDocRef = adminDb.collection('users').doc(id)
        const userSnapShot = await userDocRef.get()

        if (!userSnapShot.exists) {
            return new NextResponse(JSON.stringify({
                message: "User does not exist",
                data: null,
                success: false,
            }), {status:400})
        }

        const questionsDocRef = userDocRef.collection('questions')

        const questionsSnapshot = await questionsDocRef.orderBy('fullQuestion.metaDataForQuestion.createdAt','desc').get()

        const questions = questionsSnapshot.docs.map(doc => {

            const data = doc.data()
            return {
                id:doc.id,
                metaDataForQuestion:{
                    ...data.fullQuestion.metaDataForQuestion,
                    description: data.fullQuestion.metaDataForQuestion.description.slice(0, 45)
                }
            }
        })

        return new NextResponse(JSON.stringify({
            message: "Questions fetched successfully",
            data: questions,
            success: true,
        }))
    } catch (error:any) {
        console.error("Error fetching questions:", error);
        return new NextResponse(JSON.stringify({
            message: error.message || "Internal server error",
            data: null,
            success: false,
        }))
    }

}