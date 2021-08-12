import { FC } from "react";
import { useStyle } from "./header.style";

const Header: FC<{ text: string }> = ({ text }) => {
  const s = useStyle();
  return <div className={s.header}>{text}</div>;
};

export default Header;
