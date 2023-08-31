import React from "react";
import { useContext, useState, useEffect } from "react";
import DataContext from "../../context/DataContext";
//Components
import EventItem from "./EventItem";

function EventList({ search }) {
  const { apiData } = useContext(DataContext);
  const [filtered, setFilteredActivity] = useState(apiData);

  useEffect(() => {
    const filtered = apiData?.filter((item) =>
      item.Adi.toLocaleLowerCase().includes(search.toLowerCase())
    );
    setFilteredActivity(filtered);
  }, [search , apiData]);

  return (
    <div className="cards container">
      {filtered?.map((item) => (
        <EventItem data={item} key={item.Id} />
      ))}
    </div>
  );
}

export default EventList;
