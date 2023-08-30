import React from "react";

// Components
import Navbar from "../../layouts/Navbar";
import Carousel from "./Carousel";
import SearchBar from "./SearchBar";
import EventList from "./EventList";
import Footer from "../../layouts/Footer";

function HomePage() {
  return (
    <div className="">
      <Navbar />
      <Carousel />
      <SearchBar />
      <EventList />
      <Footer />
    </div>
  );
}

export default HomePage;
