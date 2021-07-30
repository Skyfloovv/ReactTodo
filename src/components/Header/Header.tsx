import React from 'react';
import './Header.scss';

const Header:React.FC<{ text: string }> = ({text}) => (
  <div className="Header">
      {text}
  </div>
);

export default Header;
