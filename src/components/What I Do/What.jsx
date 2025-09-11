import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import PaletteIcon from "@mui/icons-material/Palette";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import BusinessIcon from "@mui/icons-material/Business";
import CampaignIcon from "@mui/icons-material/Campaign";
import "./What.css";

const services = [
  {
    icon: <ComputerIcon fontSize="large" color="primary" />,
    title: "MERN Stack",
    description:
      "I design and develop websites that are visually appealing and user-friendly. My websites are responsive and optimized for search engines effectively.",
  },
  {
    icon: <PaletteIcon fontSize="large" color="primary" />,
    title: "WordPress",
    description:
      "I develop custom WordPress websites that are easy to manage and scale. My websites are secure, fast, and optimized for performance.",
  },
  {
    icon: <DesignServicesIcon fontSize="large" color="primary" />,
    title: "UI/UX Design",
    description:
      "I create intuitive and engaging user interfaces that deliver a seamless user experience. My designs are user-centric and conversion-focused always.",
  },
  {
    icon: <CodeIcon fontSize="large" color="primary" />,
    title: "App Design & Develop",
    description:
      "I design and develop mobile applications that are innovative and user-friendly. My apps are optimized for performance and security, ensuring quality.",
  },
  {
    icon: <BusinessIcon fontSize="large" color="primary" />,
    title: "Business Analysis",
    description:
      "I provide business analysis services to help you make informed decisions. My analysis is data-driven and actionable, tailored to your business needs.",
  },
  {
    icon: <CampaignIcon fontSize="large" color="primary" />,
    title: "SEO Marketing",
    description:
      "I offer SEO marketing services to help you improve your online visibility. My strategies are tailored to your business goals, ensuring effective results.",
  },
];

function What() {
  return (
    <div id="whatido" className="what-section">
      {/* Section Header */}
      <div className="section-header">
        <Typography variant="h1" className="what-title">Services</Typography>
        <Typography variant="h2" className="what-subtitle">What I Do</Typography>
        {/* <h1 className="what-title">Services</h1>
        <h2  className="what-subtitle">What I Do ?</h2> */}
        <div className="divider"></div>
      </div>

      {/* Services Grid */}
      <Box className="services-grid">
        {services.map((service, index) => (
          <Paper key={index} elevation={3} className="service-card">
            <Box className="service-row">
              <div className="service-icon">{service.icon}</div>

              <Box className="service-content">
                <Typography variant="h5" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" className="description">
                  {service.description}
                </Typography>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
    </div>
  );
}

export default What;