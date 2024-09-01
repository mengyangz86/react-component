import React from "react";

interface SiderDotProps {
  styleClass: string;
  onClick: () => void;
  svg: React.ReactNode;
}

export const SiderDot = ({ styleClass, onClick, svg }: SiderDotProps) => {
  return (
    <div className={styleClass} onClick={onClick}>
      {svg}
    </div>
  );
};
