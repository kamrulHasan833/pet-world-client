import "./App.css";
import Header from "./components/layout/Header";

import BackToUp from "@uiw/react-back-to-top";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HiOutlineArrowLongUp } from "react-icons/hi2";
import { Outlet } from "react-router-dom";
import Footer from "./components/layout/Footer";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {" "}
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      {/* back to top */}
      <BackToUp
        className="group  mr-6 md:mr-10 mb-10"
        size={50}
        strokeWidth={2}
      >
        <HiOutlineArrowLongUp className="text-primary transition text-2xl group-hover:-translate-y-1"></HiOutlineArrowLongUp>
      </BackToUp>
    </>
  );
}

export default App;
