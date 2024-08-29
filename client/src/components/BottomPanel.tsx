import "bootstrap/dist/css/bootstrap.min.css";
import "./BottonPanel.css";

const BottomPanel = () => {
  return (
    <div className="bottom-panel">
      <div className="icon-group">
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
    </div>
  );
};

export default BottomPanel;
