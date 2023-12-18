import React from 'react'
import { FaHtml5, FaCss3, FaReact, FaGit, FaGithub } from "react-icons/fa";
import { TbBrandJavascript, TbBrandVscode, TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiRedux } from "react-icons/si";

const Skill = () => {
  return (
    <div className='w-screen h-full text-white'>
      <div id="skills" className="skill pt-24 absolute text-center  m-auto w-full"><h2 className='md:text-6xl text-4xl  font-bold'>Skills & Tools</h2></div>
      <div className="tool flex justify-center gap-5 text-center flex-wrap  pt-60 ">
        <ul className='flex flex-wrap gap-12 md:pl-64 md:pr-64 text-center justify-center '>
          <a href='https://html.com/' ><span>HTML5</span><FaHtml5 className=' hover:text-pink-700 cursor-pointer text-8xl '/></a>
          <a href='https://css3.com/' ><span>CSS3</span><FaCss3  className=' hover:text-pink-700 cursor-pointer text-8xl'/></a>
          <a href='https://www.javascript.com/' ><span>Javascript</span><TbBrandJavascript className=' hover:text-pink-700 cursor-pointer text-9xl pt-2'/></a>
          <a href='https://tailwindcss.com/' ><span>Tailwindcss</span><SiTailwindcss className=' hover:text-pink-700 cursor-pointer text-8xl'/></a>
          <a href='https://react.dev/' ><span>React</span><FaReact className=' hover:text-pink-700 cursor-pointer text-9xl pt-2'/></a>
          <a href='https://nextjs.org/' ><span>NextJs</span><TbBrandNextjs className=' hover:text-pink-700 cursor-pointer text-8xl'/></a>
          <a href='https://git-scm.com/' ><span>Git</span><FaGit className=' hover:text-pink-700 cursor-pointer text-8xl'/></a>
          <a href='https://github.com/' ><span>Github</span><FaGithub className=' hover:text-pink-700 cursor-pointer text-8xl'/></a>
          <a href='https://redux.js.org/' ><span>Redux</span><SiRedux className=' hover:text-pink-700 cursor-pointer text-8xl'/></a>
          <a href='https://code.visualstudio.com/' ><span>Vscode</span><TbBrandVscode className=' hover:text-pink-700 cursor-pointer text-8xl'/></a>
        </ul>
      

      </div>
    </div>
  )
}

export default Skill
