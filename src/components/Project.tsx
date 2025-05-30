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

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <h2>ImageGen </h2>
                <h3>Tech Stack: Node.js, Express.js, MongoDB, Mongoose, Razorpay SDK, React.js, React Router,React Toastify</h3>
                <p>A full-stack text-to-image generator app is built using React, Node.js, Express, and MongoDB. Users can register, log in, and generate images based on prompts, with a credit system for usage. The appintegrates Razorpay for payments, allowing users to purchase credits.</p>
            </div>
            <div className="project">
               <h2>RiskRadar</h2>
                <h3>TechStack:Python, Streamlit, SQLAlchemy, SpaCy, HuggingFace Transformers, LangChain</h3>
                <p>Built an AI-assisted project risk management system to analyze and report risks across multipleprojects. Used SpaCy for natural language query parsing and Hugging Face models for generating riskmitigation suggestions. Implemented a document upload pipeline with versioned changelog storage.Integrated a Streamlit-based chatbot to answer project-specific risk queries using stored metrics andLLM-based fallback.</p>
            </div>
            <div className="project">
              <h2>YogaWise</h2>
              <h3>Flask, Python, PostgreSQL, JavaScript, HTML,CSS, Bootstrap 5, OpenCV, MediaPipe</h3>
              <p>Developed YogaWise, a wellness platform that offers personalized yoga plans based on BMI, age,gender, health conditions, and fitness goals. It features real-time pose detection using MediaPipeand TensorFlow, a BMI calculator, health condition and fitness goal tracking, and a smartrecommendation engine for tailored yoga, breathing, diet, and lifestyle guidance.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
