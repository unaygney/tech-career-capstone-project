import React from "react";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import TheaterItem from "./TheaterItem";

function TheaterList() {
  const { apiData } = useContext(DataContext);
  const TheaterActivity = apiData?.filter((event) => event.Tur === "TİYATRO");

  return (
    <div className="cards container">
      {TheaterActivity?.map((item) => (
        <TheaterItem data={item} key={item.Id} />
      ))}
    </div>
  );
}

export default TheaterList;
