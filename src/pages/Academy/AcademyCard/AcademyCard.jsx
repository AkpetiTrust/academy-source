import React from "react";
import style from "./index.module.css";
import image from "./card-image.png";
import { Link } from "react-router-dom";
import rating from "./Rating.svg";

export default function AcademyCard() {
  return (
    <Link to="/introduction" className={style.card}>
      {/* <button className={`btn ${style.status}`} disabled>
        Upcoming Class
      </button> */}
      <div className={style.card_image_container}>
        <img src={image} alt="Stanrute Academy" />
      </div>
      <div className={style.card_talk}>
        <p className="text-primary">Introducing Stanrute Academy</p>
        {/* <img src={rating} alt="rating" /> */}
        <p className={style.label}>Highlights:</p>
        <div className={style.btn_group}>
          <button className={`btn ${style.btn_blue}`}>Concepts</button>
          <button className={`btn ${style.btn_yellow}`}>Strategies</button>
          <button className={`btn ${style.btn_green}`}>Trade</button>
        </div>
      </div>
    </Link>
  );
}
