"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
    <div className="grid grid-cols1 lg:grid-cols-12">
    <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">hi, i am </span>
        <br></br>
        <TypeAnimation
      sequence={[
        'zilin!',
        1000,
        'a web developer!',
        1000,
        'a dancer!',
        1000,
        'a passionate learner!',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
        </h1>
        <p className="text-white text-base sm:text-lg lg:text-xl mb-6">
            lorem ipsum
        </p>
        <div>
            <button className="px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"> Hire Me</button>
            <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download Resume</span>
            </button>
        </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0 ">
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
            <Image 
                src="/images/portfolio-portrait.png"
                alt="portrait"
                width={300}
                height={300}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                </div>
        </div>
        </div>
    </section>
  )
}

export default HeroSection