import { useContext } from "react";
import DataContext from "../../context/DataContext";
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'



function EventItem({ data  }) {


const {dataFetched} = useContext(DataContext)
console.log(data)

  const date = new Date(data.EtkinlikBaslamaTarihi);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",



  });

  return (
    <div className="card">
      <div className="img-wrapper">
      {dataFetched ? (
          <img src={data.KucukAfis} alt={data.KisaAciklama} />
        ) : (
          <Skeleton height={200} />
        )}
      </div>

      <div className="card-content">
        <div className="date-container">
  {dataFetched ? (        <h4 className="date">{formattedDate}</h4>) : <Skeleton width={50} />}
        </div>

        <div className="card-info">
        {dataFetched ? (
            <>
            <h4 className="activity-info">{data.Adi}</h4>
            <p className="place"> Yer : {data.EtkinlikMerkezi}</p>
            </>
          ) : (
            <Skeleton width={150} />
          )}
        </div>
      </div>
    </div>
  );
}

export default EventItem;
