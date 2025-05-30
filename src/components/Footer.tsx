import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/shalinisingh1211" target="_blank" rel="noreferrer"><GitHubIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/shalinisingh1211/portfolion" target="_blank" rel="noreferrer">Shalini Singh</a> with 💜</p>
    </footer>
  );
}

export default Footer;
