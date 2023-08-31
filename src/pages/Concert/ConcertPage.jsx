import React from 'react'
import Navbar from "../../layouts/Navbar";
import Footer from '../../layouts/Footer'
import ConcertList from './ConcertList'
function ConcertPage() {
  return (
    <div className=''>
      <Navbar />
      <ConcertList />
      <Footer/>
    </div>
  )
}

export default ConcertPage
