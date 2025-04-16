import React from "react";
import "./Contact.css"

const Contact = ()=>{
    const handleEmailClick = ()=>{
        window.location.href="mailto:sumitsinha1776@gmail.com";
    };
    return(
    <div className="btn">
        <button onClick={handleEmailClick}>Contact</button>
    </div>
    );
};
export default Contact;