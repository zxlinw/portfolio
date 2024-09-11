import React from 'react'
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <footer className="mt-auto p-8">
        
        <Link href={"/"} className="text-l text-white font-semibold">Find out more about me or contact me by clicking the links below!</Link>

            <ul className="flex flex-row p-4 md:p-0 mt-5">
                <li> <SocialIcon style={{ height: "2rem", width: "2rem" }} className="mr-3" url="https://linkedin.com" href="https://www.linkedin.com/in/zilinweng/" /> </li>
                <li> <Link href={"https://www.linkedin.com/in/zilinweng/"} className="block py-2 pl-3 pr-4 mr-5 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">LinkedIn</Link></li>
                <li> <SocialIcon style={{ height: "2rem", width: "2rem" }} className="mr-3" url="https://github.com" href="https://github.com/zxlinw" /></li>
                <li> <Link href={"https://github.com/zxlinw"} className="block py-2 pl-3 pr-4 mr-5 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">GitHub</Link></li>
                <li><div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full mr-3">
              <MdOutlineEmail
                className="text-white"
                style={{ height: "1.3rem", width: "1.3rem" }}
              />
            </div></li>
                <li> <Link href={"mailto:z22weng@uwaterloo.ca"} className="block py-2 pl-3 pr-4 mr-5 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">z22weng@uwaterloo.ca</Link></li>

                <li><div className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full mr-3">
              <FaPhoneAlt
                className="text-white"
                style={{ height: "1rem", width: "1rem" }}
              />
            </div></li>

            <li> <Link href={"6472201738"} className="block py-2 pl-3 pr-4 mr-5 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">(647) 220-1738</Link></li>
                
                
            </ul>
        </footer>
    </div>
  )
}

export default Footer;