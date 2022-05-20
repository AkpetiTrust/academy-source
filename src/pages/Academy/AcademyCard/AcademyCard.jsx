import React from "react";
import style from "./index.module.css";
import fallBackImage from "./card-image.png";
import { Link } from "react-router-dom";

export default function AcademyCard({ course }) {
  const { title, image, highlights, _id } = course;

  return (
    <Link to="/course" state={{ course }} className={style.card}>
      <div className={style.card_image_container}>
        <img src={image || fallBackImage} alt="Stanrute Academy" />
      </div>
      <div className={style.card_talk}>
        <p className="text-primary">{title}</p>
        <p className={style.label}>Highlights:</p>
        <div className={style.btn_group}>
          {JSON.parse(highlights).map((highlight) => (
            <button
              key={highlight.text}
              style={{ color: "#fff", backgroundColor: highlight.color.dark }}
              className={`${style.btn}`}
            >
              {highlight.text}
            </button>
          ))}
        </div>
      </div>
    </Link>
  );
}
