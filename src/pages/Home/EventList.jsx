import React from 'react'
import { useContext } from 'react';
import DataContext from "../../context/DataContext";
//Components
import EventItem from './EventItem';




function EventList() {

    const {apiData } = useContext(DataContext)

   

  return (

    <div className='cards container'>
      {apiData?.map((item) => (
              <EventItem  data={item} key={item.Id} />
            ))}
    </div>




  )
}

export default EventList
