import {NextRequest, NextResponse} from "next/server";
import {adminDb} from "@/libs/firebase/serverAuth";
import {doc} from "@firebase/firestore/lite";

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        const {displayName, uid} = body;

        if (!displayName || !uid) {
            return new NextResponse(JSON.stringify({
                message: "displayName and uid are required",
                data: null,
                success: false,
            }), {status: 400});
        }

       const docRef = adminDb.collection('users').doc(uid);

        const snapshot = await docRef.get();

        if (snapshot.exists) {
            return new NextResponse(JSON.stringify({
                message: "User already exists",
                data: doc,
                success: true,
            }), {status:201})
        }
        else {
            await docRef.set({
                displayName:displayName,
                uid:uid,
                createdAt: new Date().toISOString()
            },{merge:true});
        }

        // Return success response
        return new NextResponse(JSON.stringify({
            message: "User created successfully",
            data: {uid, displayName},
            success: true,
        }), {status: 200});

    } catch (error: any) {
        console.error("Error creating user:", error);
        return new NextResponse(JSON.stringify({
            message: error.message || "Internal server error",
            data: null,
            success: false,
        }), {status: 500});
    }
};