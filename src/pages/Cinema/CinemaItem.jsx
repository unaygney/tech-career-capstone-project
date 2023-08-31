import React from "react";

function CinemaItem({ data }) {
  console.log(data);
  return (
    <div className="card">
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
  );
}

export default CinemaItem;
