"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image';
import TabButton from './TabButton.jsx';
import { LuStar } from "react-icons/lu";

const About = () => {
    const [tab, setTab] = useState("languages");
    const [isPending, startTransition] = useTransition();

    const data_arr = [
        (
            <ul className="my-3">
                <li className="flex items-center space-x-2"><LuStar /><span>HTML/CSS</span></li>
                <li className="flex items-center space-x-2"><LuStar /><span>JavaScript</span></li>
                <li className="flex items-center space-x-2"><LuStar /><span>C</span></li>
                <li className="flex items-center space-x-2"><LuStar /><span>Java</span></li>
                <li className="flex items-center space-x-2"><LuStar /><span>Python</span></li>
                <li className="flex items-center space-x-2"><LuStar /><span>Dart</span></li>
            </ul>
        ),
        (
            <ul className="my-3">
                <li className="flex items-center space-x-2"><LuStar /><span>React</span></li>
                <li className="flex items-center space-x-2"><LuStar /><span>SQL</span></li>
                <li className="flex items-center space-x-2"><LuStar /><span>WordPress</span></li>
                <li className="flex items-center space-x-2"><LuStar /><span>Figma</span></li>
                <li className="flex items-center space-x-2"><LuStar /><span>Flask</span></li>
                <li className="flex items-center space-x-2"><LuStar /><span>Git</span></li>
                <li className="flex items-center space-x-2"><LuStar /><span>Visual Studio</span></li>
            </ul>
        ),
        (
            <ul className="my-3">
                <li className="flex items-center space-x-2"><LuStar /><span>Detail-oriented</span></li>
                <li className="flex items-center space-x-2"><LuStar /><span>Time-management</span></li>
                <li className="flex items-center space-x-2"><LuStar /><span>Communication</span></li>
                <li className="flex items-center space-x-2"><LuStar /><span>Collaboration</span></li>
                <li className="flex items-center space-x-2"><LuStar /><span>Analytical/Problem-solving</span></li>
            </ul>
        )

    ]

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }

  return (
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
            <Image src="/images/personal.jpg" width={400} height={400} />
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
                <div>
                {tab === "languages" ? data_arr[0] : tab === "libs" ? data_arr[1] : data_arr[2]}
                </div>

            </div>
        </div>
        
    </section>
  )
}

export default About