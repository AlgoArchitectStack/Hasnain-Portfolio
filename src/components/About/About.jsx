import React from 'react';
import {Box, Typography, Button, Divider } from '@mui/material';
import './About.css';

function About() {
  return (
    <div id="about" className="About">
      <div className="aboutHeader">
        <Typography variant="h1" className='background-text'>About Me</Typography>
        <Typography variant="h2" className='foreground-text'>Know Me More</Typography>
        <Divider />
      </div>

      <div className="aboutContent">
        <div className="aboutLeft">
          <Typography variant="h2">
            I am a <span className="highlight">Full Stack Developer</span>
          </Typography>
          <Typography paragraph>
            {/* I specialize in building modern, scalable web applications that not only look great but perform seamlessly. With a strong grip on the MERN stack and .NET technologies, I turn ideas into efficient, user-friendly solutions.
            Whether you're a startup or an established brand, I help you craft your online presence with clean code, responsive design, and attention to detail.
            Timely delivery, quality work, and client satisfaction are at the heart of everything I do. */}
           I help you build brand for your business at an affordable price. Many clients have procured exceptional results while working with our dedicated team. Skilled in creating user-friendly web applications, utilizing modern web technologies, and working with cross-functional teams. 
          </Typography>
          <Typography paragraph>
            Delivering work <span className="highlight">within time and budget</span> which meets client's requirements is our motto.
          </Typography>
        </div>

        <div className="aboutRight">
          <Typography>
           <span className='label'> Name: </span><span className="normalText">Hasnain Haider</span>
          </Typography>
          <Divider />
          <Typography>
           <span className='label'>Email:</span>  <a href="mailto:hass.hh612@gmail.com" className="highlightLink">hass.hh612@gmail.com</a>
          </Typography>
          <Divider />
          <Typography>
           <span className='label'>Age:</span>  <span className="normalText">22</span>
          </Typography>
          <Divider />
          <Typography>
           <span className='label'> From:</span> <span className="normalText">Jhelum, Punjab Pakistan</span>
          </Typography>
          <Divider />
          <Button variant="contained" color="primary" href="/assets/TouseefCV-3af39df8.pdf">
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
}

export default About;
