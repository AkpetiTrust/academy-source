import React from "react";
import style from "./index.module.css";
import image from "./image.png";
import Menu from "./Menu/Menu";

function Nav({ setActiveIndex, menuItems }) {
  return (
    <nav className={style.nav}>
      <a href="https://stanrute.com/academy">
        <img src={image} alt="logo" />
      </a>
      <Menu setActiveIndex={setActiveIndex} menuItems={menuItems} />
    </nav>
  );
}

export default Nav;
