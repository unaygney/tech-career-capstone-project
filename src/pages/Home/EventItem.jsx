import { useContext } from "react";
import DataContext from "../../context/DataContext";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import 'moment/locale/tr';
import moment from "moment";


function EventItem({ data }) {
  const navigate = useNavigate();
  const { dataFetched } = useContext(DataContext);


  return (
    <div onClick={() => navigate(`event/${data.Id}`) } className="card">
      <div className="img-wrapper">
        {dataFetched ? (
          <img src={data.KucukAfis} alt={data.KisaAciklama} />
        ) : (
          <Skeleton height={200} />
        )}
      </div>

      <div className="card-content">
        <div className="date-container">
          {dataFetched ? (
            <h4 className="date">{moment(data?.EtkinlikBaslamaTarihi).format('DD/MM ')}</h4>
          ) : (
            <Skeleton width={50} />
          )}
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
