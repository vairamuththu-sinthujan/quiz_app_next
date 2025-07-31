// src/app/api/sessionLogin/route.ts
import { NextResponse } from 'next/server';
import { getAuth } from 'firebase-admin/auth';
// Make sure adminApp is correctly initialized and exported from serverAuth.ts
// It should be the admin.app.App instance
import { adminAuth } from '@/libs/firebase/serverAuth'; // Adjusted import to be more explicit for adminAuth
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    const { idToken } = await request.json();

    // Set session expiration to 5 days. Needs to be a number in milliseconds.
    // Firebase Admin SDK's createSessionCookie expects milliseconds.
    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days in milliseconds

    try {
        // Create the session cookie
        // The second argument `true` ensures that the session cookie can only be refreshed
        // by re-authenticating the user, making it more secure.
        const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn });

        // Define the cookie options
        const options = {
            name: '__session', // This is a common name for the session cookie
            value: sessionCookie,
            maxAge: expiresIn / 1000, // maxAge needs to be in seconds for Next.js cookies()
            httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
            secure: process.env.NODE_ENV === 'production', // Only send over HTTPS in production
            path: '/', // The cookie is valid for the entire domain
            sameSite: 'lax' as const, // Protection against CSRF attacks
        };

        // Set the session cookie
        const cookie = await cookies();
        cookie.set(options)

        // Return a success response
        return NextResponse.json({ success: true, message: 'Session cookie set successfully!' }, { status: 200 });

    } catch (error: any) {
        console.error('Error creating session cookie:', error);
        return NextResponse.json({ success: false, message: 'Failed to create session cookie.', error: error.message }, { status: 401 });
    }
}
