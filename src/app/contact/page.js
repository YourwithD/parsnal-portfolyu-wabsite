"use client"
import React, { useState } from "react";
import { SiIndeed } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram, FaWhatsapp, FaRegCopyright } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  const [data, setData] = useState({name: "", email: "", subject: "",})



const ChangeHandler = (e) =>{
      const name = e.target.value;
      const value = e.target.value;

      setData({ ...data, [name]: value});
};

const sandEmail = (e) => {
    
    alert(data)
  const contact = {
    SecureToken: "1963228f-50b6-4a01-9e56-b916bff910d5",
    To : 'yourwithd@gmail.com',
    From : data.email,
    Subject : "New Contact from parsnal wabsite",
    Body : `${data.name} conected to over email`,
  };
    if (Email.sand) {
      Email.sand(contact).then(()=> alert("msg sand success"));

 } 
 else {
  alert("msg not sent")
 }
};
console.log(sandEmail)

    return (
    <div className='w-screen h-fit text-white'>
      <div id="contact" className="skill pt-24 absolute pb-10 text-center  m-auto w-full"><h2 className='text-4xl md:text-6xl underline font-bold'>Contact</h2></div>
      <div className="aboutsection  flex flex-wrap-reverse  justify-items-center m-auto text-center">
      <div className="work p-10 justify-start text-start pl-20  flex-[35%] m-auto">
        <h2 className="text-6xl pb-3  font-bold">Contact Me</h2>
        <p className="flex text-2xl gap-3 pt-2 "><MdEmail className="text-pink-950 hover:text-white text-4xl cursor-pointer" />yourwithd@gmail.com</p>
        <p className="flex text-2xl gap-3 pt-2 "><IoCallOutline className="text-pink-950 hover:text-white text-4xl cursor-pointer" />9071126712</p>
        <div className=" w-full m-auto">
              <ul className="flex flex-wrap m-auto ">
                <li className="text-3xl hover:text-pink-950 pt-3 "><a href="https://github.com/YourwithD"><FaGithub /></a></li>
                <li className="text-3xl hover:text-pink-950 p-3 "><a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-jobseeker-profile--profile-one-frontend"><SiIndeed /></a></li>
                <li className="text-3xl hover:text-pink-950 p-3 "><a href="https://www.instagram.com/yourwithd/"><FaInstagram /></a></li>
                <li className="text-3xl hover:text-pink-950 p-3 "><a href="mailto:yourwithd@gmail.com"><CgMail /></a></li>
                <li className="text-3xl hover:text-pink-950 p-3 "><a href="https://wa.me/9071126712"><FaWhatsapp /></a></li>
              </ul>
      </div>
      <button className="p-2 border animate-bounce  mt-10 bg-transparent hover:bg-pink-950 rounded text-white font-semibold ">
              Download Cv
              </button>
      </div>
      <div className="work p-10  pt-40 flex-[60%]">
        <form onSubmit={sandEmail}
              className="flex flex-col md:p-20  gap-5">
          <input value={data.name} onChange={ChangeHandler} className="h-14 shadow pl-2 bg-slate-700 text-white rounded-md " type="name" id="name" name="name" placeholder="Your Name" required />
          <input value={data.email} onChange={ChangeHandler} className="h-14 shadow pl-2 bg-slate-700 text-white rounded-md " id="email" type="email" name="email" placeholder="Your Email" required />
          <textarea value={data.Subject} onChange={ChangeHandler} className="h-40 rounded-md bg-slate-700 text-white shadow pt-2 pl-2" id="msg" type="message" name="subject" placeholder="Write something.." ></textarea>
          <button type="submit" className="p-2 border animate-bounce  flex m-auto mt-10 bg-transparent  hover:bg-pink-950 rounded text-white font-semibold ">
              Submit
              </button>
        </form>
      </div>
           
          </div>
          <div className="footer flex m-auto shadow-xl w-full bg-slate-800 p-5  ">
            <h2 className="flex m-auto"> <FaRegCopyright className="text-xl gap-2" /> 2023 YourD. Personal portfolio wabsite, India. All Rights Reserved</h2>
          </div>
    </div>
  )
    }


export default Contact
