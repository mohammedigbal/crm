import React from "react";
import "./SubHeader.css";

const SubHeader: React.FC<{ pageName: string }> = ({ pageName }) => {
  return (
    <div className="sub-header">
      <div className="page-name">{pageName}</div>
      <div className="buttons">
        <button className="btn btn-primary">Save</button>
        <button className="btn btn-primary">Save & New</button>
        <button className="btn btn-primary">Cancel</button>
      </div>
    </div>
  );
};

export default SubHeader;
