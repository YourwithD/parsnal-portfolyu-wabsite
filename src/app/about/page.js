import React from 'react'
import Image from 'next/image'
import myimg2 from "../../../public/images/myimg2.png";
const About = () => {
  return (

    <>
      <div id="about" className="skill pt-16 absolute justify-center text-center  m-auto w-full"><h2 className=' justify-center text-center text-4xl  md:text-6xl underline font-bold'>About</h2></div>
      <div className="w-full text-white aboutsection pt-20 md:flex justify-items-center text-center">
      
            <div className="left  mr-20 flex-[25%] mt-40 bg-slate-700    border pt-32 rounded-t-full   sm:mt-auto  ml-20  text-center flex m-auto  justify-center">
            
                <Image
                  src={myimg2}
                  alt="YourD"
                  width={380}
                  height={250}
                  className=" lg::pt-16  bg-slate-700 "
                />
               
              </div>
           
            
            <div className="left text-center flex-[70%] md:pt-60 flex flex-col m-auto md:p-10   justify-center  ">
              
              <h2 className="flex-wrap text-white text-[14px] md:text-2xl  p-10 ">
                Hi there! I'm Dharmendra a passionate web developer. I have a solid
                foundation in React js, along with popular libraries like Redux for
                managing application state and Framer Motion for adding
                captivating animations to web projects. I'm also skilled in
                using CSS frameworks such as Bootstrap and Tailwind CSS UI to style
                components and create user-friendly layouts. In addition to
                my frontend expertise, I have a decent understanding of backend
                technologies like Node.js and Express js. This knowledge enables
                me to collaborate effectively with backend teams, bridging the
                gap between the front and back ends of web development projects.
               I'm excited to continue my journey in the tech world, eager
                to learn and contribute to innovative projects. Let's connect
                and explore opportunities together
              </h2>
              <button  className="p-2 border animate-bounce  m-auto hover:bg-pink-950 rounded text-white font-semibold ">
              <a href="../../../public/images/My_resume.pdf" target='_blank' download="../../../public/images/My_resume.pdf"  >  Download Cv </a>
              </button>
            </div>
          </div>
    </>
  )
}

export default About 
