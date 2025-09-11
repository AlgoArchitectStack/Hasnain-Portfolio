import React from "react";
import { Button } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Typewriter } from "react-simple-typewriter";
import "./Hero.css";

function Hero() {
  return (
    <div id="home" className="Container">
      <h2>Welcome</h2>
      <h1 className="hero-text">
        <Typewriter
          words={[
            "Hi, I'm Hasnain Haider",
            "I'm a Developer",
          ]}
          loop={0}
          typeSpeed={50}
          deleteSpeed={30}
        />
      </h1>

      <Button
        variant="outlined"
        color="primary"
        onClick={(e) => {
          e.preventDefault();
          const section = document.getElementById("contact");
          section?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Hire Me
      </Button>


      <div className="arrow-container"
        onClick={() => {
          const nextSection = document.getElementById("about");
          if (nextSection) {
            nextSection?.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <KeyboardDoubleArrowDownIcon />
      </div>
    </div>
  );
}

export default Hero;
