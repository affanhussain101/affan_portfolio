import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profile from '../assets/images/profile.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile} className="zoom" alt="Multi-Tenant Microservices" width="100%" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/hussainaffan" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/md-affan-hussain/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Md Affan Hussain</h1>
          <p>Software Development Engineer</p>
          <a href="https://drive.google.com/file/d/1nxzuHKmG7PVmvT_pd5ayTvgdtryzTByB/view?usp=drive_link" target="_blank" rel="noreferrer">(AWS Certified Developer Associate)</a>

          <div className="mobile_social_icons">
            <a href="https://github.com/hussainaffan" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/md-affan-hussain/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;