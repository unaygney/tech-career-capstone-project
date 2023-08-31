import React from 'react'
import { useNavigate } from 'react-router-dom'

function ConcertItem({data}) {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`event/${data.Id}`) } className="card">
    <div className="img-wrapper">
      <img src={data.KucukAfis} alt={data.KisaAciklama} />
    </div>

    <div className="card-content">
      <div className="card-info">
        <h4 className="activity-info">{data.Adi}</h4>
        <p className="place"> Yer : {data.EtkinlikMerkezi}</p>
      </div>
    </div>
  </div>
  )
}

export default ConcertItem
