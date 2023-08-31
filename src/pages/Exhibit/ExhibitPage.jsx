import React from "react";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import ExhibitList from "./ExhibitList";
function ExhibitPage() {
  return (
    <div className="">
      <Navbar />
      <ExhibitList />
      <Footer />
    </div>
  );
}

export default ExhibitPage;
