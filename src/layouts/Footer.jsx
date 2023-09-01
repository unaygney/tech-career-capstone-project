import React from "react";
//Logo
import { BsTwitter, BsTiktok, BsFacebook, BsYoutube } from "react-icons/Bs";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="col col-1">
          <div className="about-us">
            <p>
              KültürSanArt, canlı deneyimlere açılan kapınızdır. Sanat, kültür
              ve eğlencenin buluştuğu bir platformdur. Etkinlik düzenleme ve
              katılım süreçlerini basitleştirerek tutkularınıza hareket
              kazandırır.
            </p>
          </div>
        </div>

        <div className="col col-2">
          <h4>Etkinlik Düzenleyin</h4>
          <ul>
            <li>
              {" "}
              <a href="#">Sinema</a>
            </li>
            <li>
              {" "}
              <a href="#">Tiyatro</a>
            </li>
            <li>
              {" "}
              <a href="#">Sergi</a>
            </li>
            <li>
              {" "}
              <a href="#">Konser</a>
            </li>
          </ul>
        </div>

        <div className="col col-3">
          <h4 className="social-media">Sosyal Medya Adreslerimiz</h4>
          <ul>
            <li>
              <a href="#">
                <BsFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <BsTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <BsTiktok />
              </a>
            </li>
            <li>
              <a href="#">
                <BsYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
