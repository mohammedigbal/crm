import { ReactNode, useState } from "react";
import Alert from "./Alert";

interface props {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: props) => {
  return (
    <>
      <button className="btn btn-primary" onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
