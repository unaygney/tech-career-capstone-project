import React from "react";



// Components
import Navbar from "../../layouts/Navbar";
import Carousel from "./Carousel";
import SearchBar from "./SearchBar";
import EventList from "./EventList";
function HomePage() {

  return (
    <div className="">
      <Navbar />
      <Carousel />
      <SearchBar />
    <EventList/>
    </div>
  );
}

export default HomePage;
