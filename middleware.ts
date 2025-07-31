import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";
import {decodeJwt} from "jose";

export async function middleware(req:NextRequest) {
    if (req.method === "POST") {
        NextResponse.next();
    }
    const cookieStore = await cookies()
    const token = cookieStore.get("__session")?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/", req.url))
    }

    const decodeToken = decodeJwt(token)

    if (!decodeToken) {
        return NextResponse.redirect(new URL("/", req.url))
    }

    return NextResponse.next()


}


export const config = {
    matcher : [
        "/dashboard", "/question", "/question/:path*"
    ]
}