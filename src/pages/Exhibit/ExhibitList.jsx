import React from 'react'
import { useContext } from 'react';
import DataContext from "../../context/DataContext";
import ExhibitItem from './ExhibitItem';

function ExhibitList() {

    const {apiData} = useContext(DataContext)
    const ExhibitActivity = apiData?.filter(event => event.Tur === 'SERGİ' )

  return (
    <div className='cards container'>
     {ExhibitActivity?.map(item => (
        <ExhibitItem data={item} key={item.Id} />
      ))}
    </div>
  )
}

export default ExhibitList
