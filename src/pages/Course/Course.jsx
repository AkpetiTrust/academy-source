import { React, useState } from "react";
import Nav from "../../components/Nav/Nav";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";

function Course() {
  const [menuItems, setMenuItems] = useState([]);
  const location = useLocation();

  const course = location.state?.course;
  return (
    <section>
      <Nav menuItems={menuItems} />
      <Main menuItems={menuItems} course={course} />
      <Footer />
    </section>
  );
}

export default Course;
