import { initializeApp, getApps, getApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { cert } from "firebase-admin/app";
import { cookies } from "next/headers";
import { getFirestore } from "firebase-admin/firestore";
import { cache } from "react";

// Parse service account once
const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY
    ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
    : null;

// Initialize Firebase Admin App (singleton pattern)
let adminApp : any;
let adminAuth : any;
let adminDb : any;

const initializeFirebaseAdmin = () => {
    if (!getApps().length) {
        console.log("Initializing new Firebase Admin App...");
        if (!serviceAccount) {
            throw new Error("Firebase Admin SDK credentials not found.");
        }
        adminApp = initializeApp({
            credential: cert(serviceAccount),
        });
        console.log("Firebase Admin App initialized successfully.");
    } else {
        adminApp = getApp();
        console.log("Using existing Firebase Admin App instance.");
    }

    // Initialize services only once
    if (!adminAuth) {
        adminAuth = getAuth(adminApp);
        console.log("Firebase Auth service initialized.");
    }

    if (!adminDb) {
        adminDb = getFirestore(adminApp);
        console.log("Firestore service initialized.");
    }

    return { adminApp, adminAuth, adminDb };
};

// Initialize immediately
const { adminApp: app, adminAuth: auth, adminDb: db } = initializeFirebaseAdmin();

const getAuthUser = cache(async () => {
    'use server';
    const cookieStore = await cookies();

    const token = cookieStore.get("__session")?.value;
    if (!token) {
        return null;
    }

    try {
        const decoded = await auth.verifyIdToken(token, true);
        return decoded || null;
    } catch (error) {
        console.error("Error verifying token:", error);
        return null;
    }
});

export { db as adminDb, auth as adminAuth, getAuthUser };