import React from "react";
// Components
import CinemaList from "./CinemaList";

//Layout
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";

function CinemaPage() {
  return (
    <div className="">
      <Navbar />
      <CinemaList />
      <Footer />
    </div>
  );
}

export default CinemaPage;
