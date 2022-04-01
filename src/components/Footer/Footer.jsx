import React from "react";
import style from "./index.module.css";
import logo from "./logo.png";
import facebook from "./facebook-f.svg";
import instagram from "./instagram.svg";
import telegram from "./telegram.svg";
import whatsapp from "./whatsapp.svg";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <a href="https://stanrute.com/">
        <img src={logo} alt="Logo" />
      </a>

      <div className={`${style.links} grid`}>
        <div className={style.col_1}>
          <p className={style.column_heading}>Company</p>
          <a href="https://stanrute.com/careers">Career</a>
          <a href="https://stanrute.com/academy">Academy</a>
          <a href="https://wa.me/2348088261852?text=Hi%20Stanrute%21%20I%20want%20to%20_">
            Contact us
          </a>
        </div>
        <div className={style.col_2}>
          <p className={style.column_heading}>Legal</p>
          <a href="/">Terms of Services</a>
          <a href="/">Privacy Policy</a>
        </div>
        <div className={style.col_3}>
          <div className={style.social_icons}>
            <a href="https://wa.me/2348088261852?text=Hi%20Stanrute%21%20I%20want%20to%20_">
              <img src={whatsapp} alt="whatsapp" />
            </a>
            <a href="https://www.instagram.com/mystanrute_/">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="https://t.me/+GwfL6ttfuBljMjhk">
              <img src={telegram} alt="telegram" />
            </a>
            <a href="/">
              <img src={facebook} alt="facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
