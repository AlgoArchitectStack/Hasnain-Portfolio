import { useState,useEffect } from "react";
import myPhoto from "../../assets/Picture/Image.jpg";
import "./Sidebar.css";
import { FaFacebook, FaGithub, FaLinkedin  } from "react-icons/fa";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
   const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 900);
    // Handle window resize
useEffect(() => {
  const handleResize = () => {
    const desktop = window.innerWidth >= 900;
    setIsDesktop(desktop);
    if (desktop) setOpen(true);  // desktop always open
    else setOpen(false);         // mobile default closed
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  const menuItems = [
    { text: "Home", link: "home" },
    { text: "About Me", link: "about" },
    { text: "What I Do", link: "whatido" },
    { text: "Projects", link: "projects" },
    { text: "Resume", link: "resume" },
    { text: "Contact", link: "contact" },
  ];

  return (
    <div>
      {/* Hamburger Button - sirf mobile pe dikhana hai */}
      {!isDesktop && !open && (
        <button className="hamburger-btn" onClick={() => setOpen(true)}>
          ☰
        </button>
      )}
      {/* Overlay */}
{!isDesktop && open && (
  <div
    className="sidebar-overlay"
    onClick={() => setOpen(false)}
  ></div>
)}
      <div
        className={`sidebar ${open || isDesktop ? "open" : ""}`}
      >
        <img src={myPhoto} alt="My Photo" className="avatar" />

        <div className="name">
          <h2>Hasnain Haider</h2>
        </div>

        <ul className="menu-list">
          {menuItems.map((item) => (
            <li className="menu-item" key={item.text}>
              <button
                className="menu-btn"
                onClick={() => {
                  const section = document.getElementById(item.link);
                  section?.scrollIntoView({ behavior: "smooth", block: "start" });
                  if (!isDesktop) setOpen(false);
                }}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>

       
        <div className="social-icons">
          <a
            className="icon-button"
            href="https://www.facebook.com/profile.php?id=100053302451529&mibextid=ZbWKwL"
            target="_blank"
            rel="noreferrer">

           <FaFacebook />
          </a>

          <a
            className="icon-button"
            href="https://github.com/AlgoArchitectStack"
            target="_blank"
            rel="noreferrer">

          <FaGithub/>
          </a>

          <a
            className="icon-button"
            href="https://www.linkedin.com/in/hasnain-haider-7a164837a/"
            target="_blank"
            rel="noreferrer">

             <FaLinkedin/>
          </a>
        </div>
      </div>
    </div>
  );
}
