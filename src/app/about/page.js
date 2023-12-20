import React from 'react'
import Image from 'next/image'
import myimg2 from "../../../public/images/myimg2.png";
const About = () => {
  return (

    <div  className="w-screen h-full   text-white">
      <div className="aboutsection pt-20 md:flex justify-items-center text-center">
      <div id="about" className="skill pt-24 absolute text-center  m-auto w-full"><h2 className='text-4xl md:text-6xl underline font-bold'>About</h2></div>
      
            <div className="left border mr-20 flex-[25%] mt-40   sm:mt-auto  ml-20 bg-slate-900 rounded-t-full text-center flex m-auto  justify-center">
            
                <Image
                  src={myimg2}
                  alt="man"
                  width={2600}
                  height={2440}
                  className="hidden md:flex"
                />
                <Image
                  src={myimg2}
                  alt="man"
                  width={400}
                  height={340}
                  className="md:hidden"
                />
              </div>
           
            
            <div className="left text-center flex-[70%] md:pt-60 flex flex-col m-auto md:p-10   justify-center  ">
              
              <h2 className="flex-wrap text-white text-[14px] md:text-2xl  p-10 ">
                Hi there! I'm Dharmendra a passionate web developer. I have a solid
                foundation in React, along with popular libraries like Redux for
                managing application state and Framer Motion for adding
                captivating animations to web projects. I'm also skilled in
                using CSS frameworks such as Tailwind CSS UI to style
                components and create user-friendly layouts. 🌐 In addition to
                my frontend expertise, I have a decent understanding of backend
                technologies like Node.js and Express.js. This knowledge enables
                me to collaborate effectively with backend teams, bridging the
                gap between the front and back ends of web development projects.
                🚀 I'm excited to continue my journey in the tech world, eager
                to learn and contribute to innovative projects. Let's connect
                and explore opportunities together
              </h2>
              <button  className="p-2 border animate-bounce  m-auto hover:bg-pink-950 rounded text-white font-semibold ">
              <a href="../../../public/images/My_resume.pdf" target='_blank' download="../../../public/images/My_resume.pdf"  >  Download Cv </a>
              </button>
            </div>
          </div>
    </div>
  )
}

export default About
