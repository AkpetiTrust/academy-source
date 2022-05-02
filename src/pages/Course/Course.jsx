import { React, useState } from "react";
import Nav from "../../components/Nav/Nav";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";

function Course() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuItems, setMenuItems] = useState([
    {
      name: "Introducing Stanrute Academy",
      index: 0,
    },
    // {
    //   name: "The metaverse",
    //   index: 0,
    // },
    // {
    //   name: "Technology and tools",
    //   index: 0,
    // },
    // {
    //   name: "Use cases",
    //   index: 0,
    // },
    // {
    //   name: "The battle of the FAANG to lead the new revolution",
    //   index: 0,
    // },
    // {
    //   name: "Becoming a web3 developer",
    //   index: 0,
    // },
  ]);
  return (
    <section>
      <Nav setActiveIndex={setActiveIndex} menuItems={menuItems} />
      <Main
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        menuItems={menuItems}
      />
      <Footer />
    </section>
  );
}

export default Course;
