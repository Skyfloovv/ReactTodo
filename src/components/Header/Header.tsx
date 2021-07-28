import React from 'react';
import './Header.scss';

 export interface Props{
    text:string;
}
const Header:React.FC<Props> = ({text}) => (
  <div className="Header">
      {text}
  </div>
);

export default Header;
