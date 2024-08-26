import { ReactNode } from "react";

interface props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: props) => {
  return (
    <div className="alert alert-primary alert-dismissable">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert-dismissable"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
