"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image';
import TabButton from './TabButton.jsx';

const About = () => {
    const [tab, setTab] = useState("languages");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }

  return (
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
            <Image src="/images/personal.jpg" width={500} height={500} />
            <div>
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg">
                    lorem ipsum i am a webs developer i also love dancing i have experience in these technologies react, sql, node, html, css, uw student
                </p>
                <div className="flex flex-row mt-8">
                    <TabButton selectTab={() => handleTabChange("languages")} active={tab === "languages"}>Languages</TabButton>
                    <TabButton selectTab={() => handleTabChange("libs")} active={tab === "libs"}>Libraries/Tools</TabButton>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default About