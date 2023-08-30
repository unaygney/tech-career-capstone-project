import React from "react";
import Location from "../../assets/location.svg";

function EventItem({ data, key }) {
  console.log(data, key);
  const date = new Date(data.EtkinlikBaslamaTarihi);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <div className="card">
      <div className="img-wrapper">
        <img src={data.KucukAfis} alt={data.KisaAciklama} />
      </div>

      <div className="card-content">
        <div className="date-container">
          <h4 className="date">{formattedDate}</h4>
        </div>

        <div className="card-info">
          <h4 className="activity-info">{data.Adi}</h4>
    <p className="place"> Yer : {data.EtkinlikMerkezi}</p>
        </div>
      </div>
    </div>
  );
}

export default EventItem;
