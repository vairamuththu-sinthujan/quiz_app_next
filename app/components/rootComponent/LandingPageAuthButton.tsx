'use client'
import React from 'react'
import {useAuth} from "@/context/authContext";

const LandingPageAuthButton = () => {
    const {currentUser} = useAuth()
    return (
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
            { currentUser? (
                    <div className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors">
                        {
                            !currentUser?.displayName? "Welcome to CodeAI" : "Hello! " + currentUser?.displayName
                        }
                    </div>
                )
                : (
                    <div className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                        Welcome to CodeAI
                    </div>
                )
            }
        </div>
    )
}
export default LandingPageAuthButton
