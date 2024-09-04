import React from "react";
import "./Header.css";

const Header: React.FC<{ setPageName: (name: string) => void }> = ({
  setPageName,
}) => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/public/Logo.jpeg" alt="Company Logo" />
      </div>
      <div className="company-name">
        <div className="company-title">Nvincy Solutions Pvt. Ltd.</div>
        <div className="company-statement">
          Connecting You to the Future of Technology & Innovation
        </div>
      </div>
      <nav className="menu">
        <a href="#home" onClick={() => setPageName("Home")}>
          Home
        </a>
        <a href="#about" onClick={() => setPageName("About")}>
          About
        </a>
        <a href="#services" onClick={() => setPageName("Services")}>
          Services
        </a>
        <a href="#contact" onClick={() => setPageName("Contact")}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
