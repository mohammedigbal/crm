interface props {
  header: string;
}

const TopPanel = ({ header }: props) => {
  return (
    <div className="top-panel">
      <h1 className="header">{header}</h1>
      <div className="button-group">
        <button>Save</button>
        <button>Save & New</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default TopPanel;
