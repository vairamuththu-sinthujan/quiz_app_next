import React from 'react'
import {Code} from 'lucide-react';
import AuthButton from "@/app/components/rootComponent/AuthButton";
import Link from "next/link";

const Navbar = async () => {

    return (
        <nav className="flex items-center justify-between px-6 py-4 lg:px-12">
            <div className="flex items-center space-x-2">
                <Code className="w-8 h-8 text-purple-400" />
                <span className="text-xl font-bold">CodeAI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                <a href="/dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</a>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            </div>
            <div className="flex items-center space-x-4">
                <AuthButton/>
            </div>
        </nav>
    )
}
export default Navbar
