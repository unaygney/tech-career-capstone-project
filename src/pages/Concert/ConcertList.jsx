import React from 'react'
import { useContext } from 'react';
import DataContext from "../../context/DataContext";
import ConcertItem from './ConcertItem'

function ConcertList() {

    const {apiData} = useContext(DataContext)
    const ConcertActivity = apiData?.filter(event => event.Tur === 'KONSER' )

  return (
    <div className='cards container'>
     {ConcertActivity?.map(item => (
        <ConcertItem data={item} key={item.Id} />
      ))}
    </div>
  )
}

export default ConcertList
