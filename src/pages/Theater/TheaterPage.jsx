import React from "react";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import TheaterList from "./TheaterList";

function TheaterPage() {
  return (
    <div className="">
      <Navbar />
      <TheaterList />
      <Footer />
    </div>
  );
}

export default TheaterPage;
