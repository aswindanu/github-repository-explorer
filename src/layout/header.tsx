import React from "react";

import "../assets/scss/App.scss";
import logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <header className="header text-left text-white">
        <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
};

export default Header;
