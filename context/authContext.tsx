'use client'
import React, {createContext, useContext, useEffect, useState} from "react";
import {GoogleAuthProvider, signInWithPopup, User} from "firebase/auth";
import {auth} from "@/libs/firebase/client";
import {signOut as firebaseSignOut} from "@firebase/auth";
import {removeCookie, setCookie} from "@/libs/firebase/cookieActions";
import {useRouter} from "next/navigation";

const authContext = createContext<any>(null)
export const AuthProvider = ({children} : {children:React.ReactNode}) => {
    const [currentUser, setCurrentUser] = useState<User | null | undefined>(undefined)
    const router = useRouter()

    useEffect(() => {
        const unsub = auth.onAuthStateChanged( async (user)=> {
            setCurrentUser(user ?? null)
            if (user) {
                const tokenResult = await user.getIdTokenResult()
                const token = tokenResult.token
                const refreshToken = user.refreshToken
                if (token && refreshToken) {
                    await setCookie(token, refreshToken)
                }
                try {
                    await fetch('/api/user/create-user', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({uid: user.uid, displayName: user.displayName})
                    })
                }catch (error) {
                    console.error("Error creating user database:", error);
                }
            }
            else {
                await removeCookie()
            }
        })

        return () => {
            unsub()
        }
    }, []);

    const SignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            router.push("/dashboard");
            // Auth state change listener will handle setting user and session cookie

        } catch (error) {
            console.log("Error signing in with Google:", error);
            alert("Error signing in. Please try again.");
        }
    };

    const SignOut = async () => {
        try {
            await firebaseSignOut(auth);
            router.push("/")
            // Auth state change listener will handle clearing user and session cookie
        } catch (error) {
            console.error("Error signing out:", error);
            alert("Error signing out. Please try again.");
        }
    };
    const value = {
        currentUser,
        setCurrentUser,
        SignIn,
        SignOut,
    }
    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(authContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider')
    }
    return context
}