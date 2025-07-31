'use server'

import {adminAuth} from "@/libs/firebase/serverAuth";
import {cookies} from "next/headers";

const setCookie = async (token:string, refreshToken:string) => {
    try {
        const verifyToken = await adminAuth.verifyIdToken(token)
        if (!verifyToken) {
            return null
        }

        const cookieStore = await cookies()
        cookieStore.set("__session", token, {
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7
        })

        cookieStore.set("__refresh", refreshToken, {
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7
        })


    }catch (error:any) {
        console.error("Error setting cookie:", error);
    }
};


const removeCookie = async () => {
    const cookieStore = await cookies()

    cookieStore.delete("__session")
    cookieStore.delete("__refresh")
}


export {setCookie, removeCookie}