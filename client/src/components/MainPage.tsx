import { FaBell, FaEnvelope, FaUser } from "react-icons/fa";
import "./MainPage.css";
import LeadsDataEntry from "./LeadsDataEntry";

interface headerDetail {
  pageName: string;
}

const MainPage = ({ pageName }: headerDetail) => {
  return (
    <div className="container">
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
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <div className="sub-header">
        <div className="page-name">{pageName}</div>
        <div className="buttons">
          <button className="btn btn-primary">Save</button>
          <button className="btn btn-primary">Save & New</button>
          <button className="btn btn-primary">Cancel</button>
        </div>
      </div>
      <main className="content">
        <LeadsDataEntry />
      </main>
      <footer className="footer">
        <div className="footer-icons">
          <div className="icon" title="Alerts and Announcements">
            📢
          </div>
          <div className="icon" title="Activity Reminders">
            🔔
          </div>
          <div className="icon" title="Recent Items">
            🕒
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
