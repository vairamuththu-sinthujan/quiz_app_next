import React from 'react';
import Hero from "@/app/components/aboutComponents/Hero";
import States from "@/app/components/aboutComponents/States";
import Features from "@/app/components/aboutComponents/Features";
import Dev from "@/app/components/aboutComponents/Dev";
import Cta from "@/app/components/aboutComponents/Cta";

const About = () => {

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <Hero/>
            {/* Stats Section */}
            <States/>
            {/* Features Section */}
            <Features/>
            {/* About Developer Section */}
            <Dev/>
            {/* CTA Section */}
            <Cta/>
        </div>
    );
};

export default About;