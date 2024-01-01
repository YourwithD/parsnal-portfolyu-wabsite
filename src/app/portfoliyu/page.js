"use client"
import React, { useState } from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const Portfoliyu = () => {
  const [showProject, setShowProject] = useState(false)
  const project = [
    {img: require('../../../public/images/teslaproject1.jpg'),
    projectName: "Tesla Clone",
    dec: "Tesla the car wabsite and the clone tesla home section with responsive desine",
    link: "https://https-github-com-yourwith-d-tesla.vercel.app/"},

    {img: require('../../../public/images/teslaproject1.jpg'),
    projectName: "Youtube Clone",
    dec: "Youtube Home page clone with search functionality and  where you watch video ",
    link: "https://https-github-com-yourwith-d-tesla.vercel.app/"},
    {img: require('../../../public/images/persnal.jpg'),
    projectName: "Your D",
    dec: "Your D this is portfoliyu wabsite ",
    link: "www.yourd.in"}, 
    
  ]
  return (
    <div className="w-full  h-fit bg-slate-950 text-white">
      <div className=" pt-20 md:flex justify-items-center m-auto text-center">
        <div
          id="portfoliyu"
          className="skill pt-24 absolute text-center  m-auto w-full"
        >
          <h2 className="text-4xl md:text-6xl underline font-bold">
            My Project
          </h2>
        </div>
        <div className="worklist m-auto sm:flex  justify-center  text-center w-full mt-44  ">
             
           {
             project.map(item =>{
               return (
                <div key={project} className=" relative overflow-hidden h-[500px] w-[300px] m-auto  grid grid-flow-col-dense text-center justify-center sm:m-5 p-5 sm:p-0   rounded-sm">
            <Image
            src = {item.img}
              width={200}
              height={100}
              alt="work1"
              onMouseEnter={()=> setShowProject(true)}
              className={`rounded-sm h-full w-fit  bg-cover block   ${showProject ? "scale-110 origin-center" : ""}`}
            />
            <div onMouseLeave={()=> setShowProject(false)} className={`workinfo    absolute left-0 bottom-0 text-center justify-center m-auto flex flex-col overflow-hidden  delay-100 w-full  bg-gradient-to-b from-violet-700 to-violet-100 ${showProject ? "h-full" : "h-0"}`} >
              <h2 className="text-3xl font-bold animate-bounce bg-transparent">{item.projectName}</h2>
              <p className="animate-bounce bg-transparent">{item.dec}</p>
              <a href={item.link} className="rounded-full animate-bounce bg-transparent  p-2 border flex ml-auto mr-auto hover:bg-slate-950 text-center font-bold hover:text-purple-400" ><FaExternalLinkAlt className="text-3xl bg-transparent  " /></a>
            </div>
          </div>

            )
          })
         }
           
           
            
         </div>
      </div>
    </div>
  );
};

export default Portfoliyu;
