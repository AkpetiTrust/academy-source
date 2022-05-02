import React from "react";
import style from "./academy.module.css";
import logo from "./Stanrute.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import AcademyCard from "./AcademyCard/AcademyCard";

export default function Academy() {
  return (
    <section className={style.academy}>
      <Navbar textColor="#00422E">
        <Link to="/" className={style.logo}>
          <img src={logo} alt="Logo" />
        </Link>
      </Navbar>
      <section className={style.hero}>
        <h1>Stanrute Academy</h1>
        <div className="center">
          <p>
            We want our community to build their financial future with the right
            tools. Hence, we are at the for front educating our community about
            the tools and dynamics of the financial market.
          </p>
        </div>
        <Link to="/introduction" className="btn">
          Get Started
        </Link>
      </section>
      <main className={style.main}>
        <h1>Our Educational Packages</h1>
        <p className={style.subtitle}>
          We have free and paid resources that are curated by industry experts
        </p>
        <div className={style.card_section}>
          <div>
            <AcademyCard />
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}
