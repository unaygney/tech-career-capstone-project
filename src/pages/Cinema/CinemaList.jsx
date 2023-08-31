import React from 'react'
import { useContext } from 'react';
import DataContext from "../../context/DataContext";
import CinemaItem from './CinemaItem'

function CinemaList() {

    const {apiData} = useContext(DataContext)
    const CinemaActivity = apiData?.filter(event => event.Tur === 'SİNEMA' )

  return (
    <div className='cards container'>
     {CinemaActivity?.map(item => (
        <CinemaItem data={item} key={item.Id} />
      ))}
    </div>
  )
}

export default CinemaList
