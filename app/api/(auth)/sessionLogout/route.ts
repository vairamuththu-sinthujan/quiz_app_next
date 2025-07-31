// src/app/api/sessionLogout/route.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    try {
        // Expire the session cookie by setting its maxAge to 0
        const cookie = await cookies();
        cookie.set({
            name: '__session',
            value: '', // Clear the value
            maxAge: 0, // Immediately expire the cookie
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
        });

        return NextResponse.json({ success: true, message: 'Session cookie cleared successfully!' }, { status: 200 });

    } catch (error: any) {
        console.error('Error clearing session cookie:', error);
        return NextResponse.json({ success: false, message: 'Failed to clear session cookie.', error: error.message }, { status: 500 });
    }
}
