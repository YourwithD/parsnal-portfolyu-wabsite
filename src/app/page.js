import About from "./about/page";
import Contact from "./contact/page";
import Header from "./header/page";
import Portfoliyu from "./portfoliyu/page";
import Skill from "./skill/page";
import React from "react";
import './globals.css'

export default function Home() {

  
  return (
    <>
      <Header />
      <About />
      <Skill />
      <Portfoliyu />
      <Contact />
    </>
  )
}