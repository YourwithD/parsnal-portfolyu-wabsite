"use client"
import React, { useState } from "react";
import Image from "next/image";
import tac from "../../../public/images/tacpng.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { SiIndeed } from "react-icons/si";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
const Header = () => {
  const [openManu, setOpenManu] = useState(false)
  return (
    <>
      <nav className={`flex justify-between fixed w-full   text-white  bg-slate-700 z-40   ${openManu ? "w-full h-[50%]" : ""} `}>
            <div onClick={()=> setOpenManu(true)}  className="flex bg-slate-700 md:hidden text-center">
              
              <RxHamburgerMenu className="text-4xl font-bold m-2 bg-slate-700  " />
            </div>
           <Link href="/"> <div className={`text-4xl bg-slate-700  flex text-center cursor-pointer p-2 ${openManu ? "hidden" : ""} `}>
              {" "}
              Your <span className="text-pink-950 font-bold bg-slate-700  animate-bounce text-4xl ">
                D
              </span>{" "}
            </div></Link>
            <div className={`md:flex ${openManu ? "flex w-full mt-10 h-[50%] translate-x-5 bg-transparent   delay-500 ease-in-out " : "hidden"} `}>
              <ul className={`gap-5 bg-slate-700   text-2xl ${openManu ? "flex-col " : "flex"} `}>
                <li onClick={()=> setOpenManu(false)} className="cursor-pointer bg-slate-700  p-2 hover:underline ">
                  <a className="bg-slate-700 " href="#home">Home</a>
                </li>
                <li onClick={()=> setOpenManu(false)} className="cursor-pointer bg-slate-700  p-2 hover:underline ">
                  <a className="bg-slate-700 " href="#about">About</a>
                </li>
                <li onClick={()=> setOpenManu(false)} className="cursor-pointer bg-slate-700  p-2 hover:underline ">
                  <a className="bg-slate-700 " href="#skills">Skills</a>
                </li>
                <li onClick={()=> setOpenManu(false)} className="cursor-pointer bg-slate-700  p-2 hover:underline ">
                  <a className="bg-slate-700 " href="#portfoliyu">Portfoliyu</a>
                </li>
                <li onClick={()=> setOpenManu(false)} className="cursor-pointer bg-slate-700  p-2 hover:underline ">
                  <a className="bg-slate-700 " href="#contact">Contact</a>
                </li>
              </ul>
               
            </div>
            <div className={`btn text-center m-2 md:mr-10  flex ${openManu ? "hidden" : ""} `}>
          <Link href='/#contact'>  <button className=" border  p-1  text-xl   text-center  bg-pink-950 rounded text-white font-semibold ">
                Contact
              </button></Link>
             </div>
              <div onClick={()=> setOpenManu(false)} className={`cross bg-slate-700  ${openManu ? "flex" : "hidden"} `}><IoIosCloseCircleOutline  className={`text-5xl pt-1 bg-slate-700 text-center font-bold mr-5 ${openManu ? "flex" : "hidden"} `}/></div>
           
          </nav>
      <div className="header w-screen  bg-slate-950 right-0 text-white">
        <div className="contenor">
          
          <div id="home" className="homesection md:flex  justify-between text-center w-screen h-full ">
            <div className="left text-center justify-center md:w-[65%] p-5  pt-20 md:pl-10 ">
              <span className="text-6xl  ">Hi, I'm </span>
              <span className="text-6xl font-bold hover:animate-ping animate-pulse hover:translate-x-full cursor-pointer text-pink-950 ">
                Dharmendra,
              </span>
              <h2 className="text-6xl  ">Wab Doveluper</h2>
              <h2 className="flex-wrap md:text-2xl p-10 ">
                I work with the react js. I am a tech enthusiast, and I love
                exploring new technology. Therefore, I prioritize every
                component of my work and hook them dedicatedly. As a result, I
                am always ready to embrace new and required technology.
              </h2>
              <button className="p-2 border animate-bounce mt-10 bg-transparent  hover:bg-pink-950 rounded font-semibold ">
              Connect Me
              </button>
              <div className=" w-full m-auto">
              <ul className="flex flex-wrap m-auto text-center justify-center ">
                <li className="text-6xl p-5   "><a href="https://github.com/YourwithD"><FaGithub /></a></li>
                <li className="text-6xl p-5  "><a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-jobseeker-profile--profile-one-frontend"><SiIndeed /></a></li>
                <li className="text-6xl p-5   "><a href="https://www.instagram.com/yourwithd/"><FaInstagram /></a></li>
                <li className="text-7xl p-5  "><a href="mailto:yourwithd@gmail.com"><CgMail /></a></li>
                <li className="text-6xl p-5   "><a href="https://wa.me/9071126712"><FaWhatsapp /></a></li>
              </ul>
              </div>
            </div>
            <div className="right md:w-[30%] m-auto md:flex hidden">
              <div className="  ">
                <Image
                  src={tac}
                  alt="man"
                  width={1000}
                  height={840}
                  className=" animate-pulse hover:animate-ping "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
