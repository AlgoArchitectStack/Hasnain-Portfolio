import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { Phone, Email, WhatsApp, LinkedIn, GitHub, Facebook } from "@mui/icons-material";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "0b36c70d-dc2a-4046-bfde-66c4150d4ba1",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Contact Form Submission",
          from_name: formData.name,
          from_email: formData.email,
          honeypot: "", // must exist, leave blank
          redirect: "https://yourwebsite.com/thank-you" 
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error(result);
        alert("Oops! Something went wrong. Please check console for details.");
      }
    } catch (error) {
      console.error(error);
      alert("Oops! Something went wrong. Please check console for details.");
    }
  };

  return (
    
 <div className="contact-container" id="contact">
      <div className="contact-header" align="center">
     <h1 className="title">CONTACT</h1>
      <h2 className="subtitle">Get in Touch</h2>
         <div className="divider"></div>
      </div>

      <div className="contact-content">
        {/* Left Side - Info */}
        <div className="contact-info">
          <Typography variant="h4">CONTACT ME</Typography>

          <div className="info-item">
            <Phone />
            <Typography>+92 3178089232</Typography>
          </div>

          <div className="info-item">
            <Email />
            <Typography>hass.hh612@gmail.com</Typography>
          </div>

          <Typography variant="h4" sx={{ marginTop: 2 }}>
            FOLLOW ME
          </Typography>

          <div className="icons">
            <a href="https://wa.me/923178089232?text=Hi!" target="_blank" rel="noopener noreferrer" className="icon">
              <WhatsApp sx={{ fontSize: 40, color: "#25D366" }} />
            </a>
            <a href="https://www.linkedin.com/in/hasnain-haider-7a164837a/" target="_blank" rel="noopener noreferrer" className="icon">
              <LinkedIn sx={{ fontSize: 40, color: "#0A66C2" }} />
            </a>
            <a href="https://github.com/AlgoArchitectStack" target="_blank" rel="noopener noreferrer" className="icon">
              <GitHub sx={{ fontSize: 40, color: "#171515" }} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100053302451529&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="icon">
              <Facebook sx={{ fontSize: 40, color: "#1877F2" }} />
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <Box className="contact-form">
          <Typography variant="h6">SEND US A NOTE</Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="dense"
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="dense"
              required
            />
            <TextField
              label="Tell us more about your needs..."
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              fullWidth
              margin="dense"
              required
            />

            <Button variant="contained" color="primary" type="submit" sx={{ marginTop: 2 }}>
              Send Message
            </Button>
          </form>
        </Box>
      </div>
    </div>
  );
}

export default Contact;