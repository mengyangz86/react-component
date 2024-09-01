import React from "react";
import "./sider.css";

interface SiderButtonProps {
  onClick: () => void;
  svg: React.ReactNode;
  styleClass: string;
}

export const SiderButton = ({ onClick, svg, styleClass }: SiderButtonProps) => {
  return (
    <button className={styleClass} onClick={onClick}>
      {svg}
    </button>
  );
};
