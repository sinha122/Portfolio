import React from "react";
import "./About.css"
const About = () => {
    return (
        <div className="about-background">
            <div className="icon">
                <img src="/images/photo.jpeg" alt="Profile" className="img"/>
            </div>
            <p>
                Hi, I'm Sumit Sinha based in Noida,  passionate in full Stack development with experience in building scalable web applications. 
                I specialize in HTML,CSS,Javascript,React.js,Node.js and MongoDb. I love solving complex problems and continuously learning new technologies.
            </p>
            <div className="Media Profiles">
                <a href="https://www.linkedin.com/in/sumit-sinha-4663aa201/" className="linkedin">LinkedIn</a>
                <a href="https://github.com/sinha122" className="github">GitHub</a>
            </div>
        </div>
    );
};

export default About;
