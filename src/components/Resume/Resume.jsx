import React from "react";
import { Container, Typography, Grid, Paper, LinearProgress, Button } from "@mui/material";
import "./Resume.css";

const educationData = [
  {
    date: "2022 - 2026",
    title: "Bachelor of Computer Science",
    subtitle: "Hamdard University Islamabad campus",
    description: "Studied core computer science subjects, participated in coding competitions, and completed various projects.",
  },
  {
    date: "2019 - 2021",
    title: "Intermediate Degree",
    subtitle: "Aspire College Jhelum",
    description: "Focused on pre-engineering subjects, excelled in mathematics and physics, and engaged in extracurricular activities.",
  },
];

const experienceData = [
  {
    date: "OCT, 2022 (cont.)",
    title: "MERN Stack Developer",
    subtitle: "Self Employed",
    description: "Developed full-stack web applications using MongoDB, Express.js, React, and Node.js for various clients.",
  },
  {
    date: "JULY, 2023 - SEP, 2023",
    title: "NetSuite Developer (Jnr)",
    subtitle: "KeyStone Consulting",
    description: "Assisted in developing and customizing NetSuite solutions, improving business processes, and providing support.",
  },
];

const skillsData = [
  { name: "Web Design", value: 99 },
  { name: "React JS", value: 90 },
  { name: "Express JS", value: 70 },
  { name: "JavaScript", value: 85 },
  { name: "Material UI", value: 99 },
  { name: "Bootstrap", value: 65 },
];

function Resume() {
  return (
    <div id="resume" className="resume-container">
   
      <div className="resume-header" align="center">
        <Typography variant="h1" className="title">Summary</Typography>
        <Typography variant="h2" className="subtitle">Resume</Typography>
        <div className="divider"></div>
      </div>

      {/* Education & Experience */}
    
        <div className="section" >
          {[
            { title: "My Education", data: educationData },
            { title: "My Experience", data: experienceData },
          ].map((section, idx) => (
            <div key={idx}>
              <div  className="section-title">{section.title}</div>
              {section.data.map((item, i) => (
                <div key={i} className="card">
                  <div><span className="date">{item.date}</span></div>
                  <div className="card-title">{item.title}</div>
                  <div className="card-subtitle"><h3>{item.subtitle}</h3></div>
                  <div className="card-disc">{item.description}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
    

      {/* Skills */}
      <div className="skills-section">
        <h2>My Skills</h2>
        <div className="skills">
          {skillsData.map((skill, i) => (
            <div key={i} className="skill">
              <div className="skill-name">{skill.name}</div>
              <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${skill.value}%` }}></div>
        </div>
        <div className="percentage">{skill.value}%</div>
      
            </div>
          ))}
        </div>
      </div>

      {/* CV Button */}
       <div className="cv-button-container">
        <Button
          // variant="contained"
          // color="primary"
          href="/assets/TouseefCV-3af39df8.pdf"
          download
          className="cv-button"
        >
          Download CV
        </Button>
      </div> 
    

    </div>
  );
}

export default Resume;
