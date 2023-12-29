"use client"
import React, { useState } from "react";

const Form = () => {
  const [formState, setFormState] = useState({});

  const sandEmail = (e) => {   
        e.PreventDefault();
  const contact = {
    SecureToken: "1963228f-50b6-4a01-9e56-b916bff910d5",
    To : 'yourwithd@gmail.com',
    From : formState.email,
    Subject : "New Contact from parsnal wabsite",
    Body : `${formState.name} conected to over email`,
  };
    if (Email.sand) {
      Email.sand(contact).then(()=> alert("msg sand success"));

 } 
 else {
  alert("msg not sent")
 }
};

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <form onSubmit={sandEmail} className="flex m-auto border">
        <input value={formState.name || ''} type="text" name="name" onChange={changeHandler} placeholder="your name" />
        <input value={formState.email || ''} type="email" name="email" onChange={changeHandler} placeholder="your email" />
        <button value="Send Email" type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
