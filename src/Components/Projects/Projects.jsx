import React from "react";
import "./Projects.css";

const Projects = () => {
    return (
        <div className="Project">
            <h5>Projects</h5> 
            
            <div className="Project-card1">
                <h6>Hospital Service Provider</h6>
                <p>
                    This project provides doctors and clinics in a particular area. 
                    When a patient is in urgency, they can register and log in with their email ID and password.
                    They will get access to doctors and clinics within their area at any moment.
                </p>
                <a href="https://github.com/sinha122/HospitalProvider-master"><button>Link</button></a>
                <div className="Project-card2">
                    <h6>Disinformation Detector</h6>
                   <p>
                    The Disinformation Detector is a web-based application that helps users identify and verify the credibility of online news 
                    articles,social media posts, and other digital content. The tool uses  Machine Learning techniques to analyze text and 
                    detect potential misinformation, fake news, or biased content.
                   </p>
                   <a href="https://github.com/sinha122/Disinformation-detector"><button>Link</button></a>
                </div>
            </div>
        </div>
    );
};

export default Projects;