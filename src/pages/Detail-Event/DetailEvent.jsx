import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../layouts/Navbar';
import Footer from '../../layouts/Footer';
function DetailEvent() {
    const { id } = useParams();
  return (
    <>
        <Navbar/>
    
    <div className='event-card'>
    <p>{id}</p>
    </div>

        <Footer />
    </>
  )
}

export default DetailEvent
