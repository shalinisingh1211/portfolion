import React, { useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  useEffect(() => {
    document.title = "Shalini Singh | Portfolio";
  }, []);

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* Image can go here */}
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/shalinisingh1211" target="_blank" rel="noreferrer"><GitHubIcon /></a>
          </div>
          <h1>Shalini Singh</h1>
          <p>3rd Year, CSE (AI)</p>
          <p>CGPA: 9.60</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/shalinisingh1211" target="_blank" rel="noreferrer"><GitHubIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

