import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#121212] bg-opacity-90">
        <div className="flex flex-wrap item-center justify-between mx-auto p-8">
            <Link href={"/"} className="text-4xl md:text-5xl text-white font-semibold">LOGO</Link>
            <div className="menu md:block md:w-auto" id="navbar">
                <ul className="flex flex-row p-4 md:p-0">
                    <li> <Link href={"#about"} className="block py-2 pl-3 pr-4 mr-5 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">About Me</Link></li>
                    <li> <Link href={"#projects"} className="block py-2 pl-3 pr-4 mr-5 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">Projects</Link></li>
                    <li> <Link href={"#more"} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">More</Link></li>
                    
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar