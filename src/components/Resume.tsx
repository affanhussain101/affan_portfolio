import React from "react";
import DownloadIcon from '@mui/icons-material/Download';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import '../assets/styles/Resume.scss';

function Resume() {
  const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;

  return (
    <div id="resume">
      <div className="items-container">
        <div className="resume-wrapper">
          <h1>Resume</h1>
          <p>Explore my background, experience, and achievements below, or download a copy for your records.</p>
          
          <div className="resume-actions">
            <a
              href={resumeUrl}
              download="Md_Affan_Hussain_Resume.pdf"
              className="resume-btn download-btn"
            >
              <DownloadIcon /> Download Resume
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="resume-btn preview-btn"
            >
              <OpenInNewIcon /> Open in New Tab
            </a>
          </div>

          <div className="resume-preview-container">
            <iframe
              src={`${resumeUrl}#view=FitH`}
              title="Md Affan Hussain Resume"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
