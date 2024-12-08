import React from "react";

interface LabelProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => (
  <div className="w-24 h-12 rounded-full bg-white shadow-lg flex text-center items-center justify-center ">
    <b>{children}</b>
  </div>
);

export default Label;
