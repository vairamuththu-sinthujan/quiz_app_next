'use client'
import React from 'react';
import { User2, LogOut } from "lucide-react";
import Image from "next/image";
import {useAuth} from "@/context/authContext";

const AuthButton = () => {

    const { currentUser, SignOut, SignIn } = useAuth()


    return (
        <div className="relative">
            {currentUser ? (
                <div className='flex justify-center items-center rounded-full text-center relative group'>
                    {currentUser?.photoURL ? (
                        <Image
                            src={currentUser.photoURL}
                            alt={'profile'}
                            width={35}
                            height={35}
                            className='rounded-full border-2 border-gray-200 hover:border-gray-300 transition-colors cursor-pointer'
                        />
                    ) : (
                        <div className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer'>
                            <User2 size={20} className="text-gray-600"/>
                        </div>
                    )}

                    {/* Sign out tooltip */}
                    <div className='absolute top-full mt-2 left-1/2 transform -translate-x-1/2
                          opacity-0 group-hover:opacity-100 transition-opacity duration-200
                          bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg
                          whitespace-nowrap z-10 pointer-events-none'>
                        <button
                            className='flex items-center gap-2 text-sm hover:text-gray-200 transition-colors pointer-events-auto cursor-pointer'
                            onClick={SignOut}
                        >
                            <span>Sign out</span>
                            <LogOut size={16}/>
                        </button>

                        {/* Arrow pointing up */}
                        <div className='absolute bottom-full left-1/2 transform -translate-x-1/2
                              border-4 border-transparent border-b-gray-800'></div>
                    </div>
                </div>
            ) : (
                <div className='relative group'>
                    <button
                        onClick={SignIn}
                        className='bg-white text-black rounded-full p-2 cursor-pointer
                         hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md
                         border border-gray-200'
                    >
                        <User2 size={20}/>
                    </button>

                    {/* Sign in tooltip */}
                    <div className='absolute top-full mt-2 left-1/2 transform -translate-x-1/2
                          opacity-0 group-hover:opacity-100 transition-opacity duration-200
                          bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg
                          whitespace-nowrap z-10'>
                        <span className="text-sm">Sign in</span>

                        {/* Arrow pointing up */}
                        <div className='absolute bottom-full left-1/2 transform -translate-x-1/2
                              border-4 border-transparent border-b-gray-800'></div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default AuthButton
