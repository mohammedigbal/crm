import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
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
  );
};

export default Footer;
