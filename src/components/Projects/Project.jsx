import React, { useState } from "react";
import bannerImg from "../../assets/Banner/Image.jpg";
import {
  Container,
  Typography,
  Tabs,
  Tab,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import "./Project.css"; // custom CSS

const projects = [
  {
    title: "Aventura",
    img: bannerImg,
    category: "React",
  },
  {
    title: "Towing Management System",
    img:  bannerImg,
    category: "WordPress",
  },
  {
    title: "Suite Logics",
    img:  bannerImg,
    category: "React",
  },
  {
    title: "PakLook",
    img:  bannerImg,
    category: "WordPress",
  },
  {
    title: "UAE Towing Service",
    img:  bannerImg,
    category: "React",
  },
  {
    title: "Millennium Quther Car",
    img: bannerImg,
    category: "Photos",
  },
  {
    title: "ArtiZEn Marketplace",
    img:  bannerImg,
    category: "React",
  },
];

function Projects() {
  const [tab, setTab] = useState("All");

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const filteredProjects =
    tab === "All"
      ? projects
      : projects.filter((p) => p.category === tab);

  return (
    <div id="projects" className="projects-section">
      <Container>
        <div className="projects-header">
          <Typography variant="h1" className="title">PROJECTS</Typography>
          <Typography variant="h2" className="subtitle">My Work</Typography>
        </div>

        {/* Tabs */}
        <Tabs
          value={tab}
          onChange={handleChange}
          className="tabs"
          centered>

          <Tab  label="All" value="All" />
          <Tab  label="React" value="React" />
          <Tab  label="WordPress" value="WordPress" />
          <Tab  label="Photos" value="Photos" />
        </Tabs>

        {/* Project Cards */}
      <div container className="projects-grid">
  {filteredProjects.map((project, index) => (
   <div className="project-item" key={index}>
      <Card className="project-card">
        <CardMedia
          component="img"
          image={project.img}
          alt={project.title}
          className="project-card-image"
        />
        <CardContent className="project-card-overlay">
          <Typography variant="h6" className="project-card-title">
            {project.title}
          </Typography>
        </CardContent>
      </Card>
   </div>
  ))}
</div>

      </Container>
    </div>
  );
}
export default Projects;