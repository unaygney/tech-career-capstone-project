import React, { useState, useContext, useEffect } from "react";
import DataContext from "../../context/DataContext";
import { useParams } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import moment from "moment";

//Layouts
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";

function DetailEvent() {
  const { apiData } = useContext(DataContext);
  const [filteredData, setFilteredData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const filteredEvent = apiData?.filter((event) => event.Id === Number(id));
    if (filteredEvent) {
      setFilteredData(filteredEvent);
    }
  }, [apiData, id]);

  if (!filteredData) {
    return <p>Etkinlik bulunamadı.</p>;
  }

  return (
    <>
      <Navbar />

      {filteredData ? (
        <>
          <div className="event-card container">
            <div className="img-wrapper">
              <img src={filteredData[0]?.KucukAfis} alt="" />
            </div>

            <div className="event-content">
              <h2 className="heading-m">{filteredData[0]?.Adi}</h2>

              <div className="event-information">
                <h4 className="event-heading heading-s">Etkinlik Hakkında</h4>
                <ul>
                  <li>
                    <p>
                      Etkinlik Ücretli Mi? :{" "}
                      {filteredData[0]?.UcretsizMi ? "Evet" : "Hayır"}{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      Etkinlik Başlama Saati :
                      {filteredData[0]?.EtkinlikBaslamaTarihi
                        ? moment(filteredData[0].EtkinlikBaslamaTarihi).format(
                            "DD/MM/YYYY"
                          )
                        : "Tarih bulunamadı"}
                    </p>
                  </li>
                  <li>
                    <p>
                      Etkinlik Bitiş Saati :{" "}
                      {filteredData[0]?.EtkinlikBitisTarihi
                        ? moment(filteredData[0].EtkinlikBitisTarihi).format(
                            "DD/MM/YYYY"
                          )
                        : "Tarih bulunamadı"}
                    </p>
                  </li>
                  <li>
                    <p>Etkinlik Türü: {filteredData[0]?.Tur} </p>
                  </li>
                </ul>

                <div className="location">
                  <MdLocationOn />
                  <p>{filteredData[0]?.EtkinlikMerkezi}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2>Geçersiz URL</h2>
        </>
      )}

      <Footer />
    </>
  );
}

export default DetailEvent;
