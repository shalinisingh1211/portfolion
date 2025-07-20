import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import Yogap from '../assets/images/Yogap.png';
import Risk from '../assets/images/Risk.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects-<b>Click on the image to visit the project</b></h1>
        <div className="projects-grid">
            <div className="project">
                <h2><u>ImageGen</u></h2>
                <h3>Tech Stack:React.js,Node.js,MongoDb,RazorPay SDK.(MERN)</h3>
                <a href="https://imagegen-mu-mauve.vercel.app/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/drive/folders/1I0FtbjQCYgP77UuXDyCM29Wr1wCIMToa?usp=drive_link" target="_blank" rel="noreferrer"><h2><b>Project Code(Drive Link)</b></h2></a>
                <p>A full-stack text-to-image generator app is built using React, Node.js, Express, and MongoDB. Users
can register, log in, and generate images based on prompts, with a credit system for usage. The app
integrates Razorpay for payments, allowing users to purchase credits.</p>
            </div>
            <div className="project">
                <h2><u>YogaPosePerfection</u></h2>
                <h3>Tech Stack:HTML,CSS,Javascript,Deep Learning</h3>
                <a href="https://shalinisingh1211.github.io/yoga-tracker-website/" target="_blank" rel="noreferrer"><img src={Yogap} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/drive/folders/1_h0eq9ChGpzyWQvIKVP_5M18EHQiwyLl?usp=drive_link" target="_blank" rel="noreferrer"><h2><b>Project Code(Drive Link)</b></h2></a>
                <p>Developed a web application utilizing Deep Learning to monitor yoga postures, achieving an
impressive accuracy in pose detection through the integration of TensorFlow and OpenCV for
real-time user feedback.</p>
            </div>
            <div className="project">
                <h2><u>RiskRadar</u></h2>
                <h3>Tech Stack:Python, Streamlit, SQLAlchemy, SpaCy, HuggingFace Transformers, LangChain</h3>
                <a href="https://drive.google.com/file/d/1GGyqbEwVa_p_07pATQXB2Jd5PyvbuD7v/view?usp=drive_link" target="_blank" rel="noreferrer"><img src={Risk} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/drive/folders/1gaK7oOEB-p3IUi1luWeA8QQa-UncH_YS?usp=drive_link" target="_blank" rel="noreferrer"><h2><b>Project Code(Drive Link)</b></h2></a>
                <p>Built an AI-assisted project risk management system to analyze and report risks across multiple
projects. Used SpaCy for natural language query parsing and Hugging Face models for generating risk
mitigation suggestions. Implemented a document upload pipeline with versioned changelog storage.
Integrated a Streamlit-based chatbot to answer project-specific risk queries using stored metrics and
LLM-based fallback.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
