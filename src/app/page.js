import About from "./about/page";
import Contact from "./contact/page";
import Header from "./header/page";
import Portfoliyu from "./portfoliyu/page";
import Skill from "./skill/page";
import React from "react";
import './globals.css'

export default function Home() {

  
  return (
    <div className="  ">
      <Header className='w-full h-full' />
      <About className='w-full h-full' />
      <Skill className='w-full h-full' />
      <Portfoliyu className='w-full h-full' />
      <Contact className='w-full h-full' />
    </div>
  )
}