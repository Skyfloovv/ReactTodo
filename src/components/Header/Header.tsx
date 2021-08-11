import React from "react";
import { useStyle } from "./header.style";

const Header: React.FC<{ text: string }> = ({ text }) => {
  const s = useStyle();
  return <div className={s.header}>{text}</div>;
};

export default Header;
