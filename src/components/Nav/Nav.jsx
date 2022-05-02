import React from "react";
import style from "./index.module.css";
import image from "./image.png";
import Menu from "./Menu/Menu";
import { Link } from "react-router-dom";

function Nav({ setActiveIndex, menuItems }) {
  return (
    <nav className={style.nav}>
      <Link to="/">
        <img src={image} alt="logo" />
      </Link>
      <Menu setActiveIndex={setActiveIndex} menuItems={menuItems} />
    </nav>
  );
}

export default Nav;
