import React, {useState} from "react";

// Components
import Navbar from "../../layouts/Navbar";
import Carousel from "./Carousel";
import SearchBar from "./SearchBar";
import EventList from "./EventList";
import Footer from "../../layouts/Footer";

function HomePage() {

  const [search, setSearch] = useState('')


  return (
    <div className="">
      <Navbar />
      <Carousel />
      <SearchBar search={search} setSearch={setSearch} />
      <EventList search={search} />
      <Footer />
    </div>
  );
}

export default HomePage;
