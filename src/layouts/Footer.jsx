import React from "react";
import Logo from "../../src/assets/logo_transp.png";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="col col-1">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>

          <div className="about-us">
            <p>
            KültürSanArt, canlı deneyimlere açılan kapınızdır. Sanat, kültür ve eğlencenin buluştuğu bir platformdur. Etkinlik düzenleme ve katılım süreçlerini basitleştirerek tutkularınıza hareket kazandırır.
            </p>
          </div>
        </div>

        <div className="col col-2">
            <h4>Etkinlik Düzenleyin</h4>
            <ul>
                <li>Sinema</li>
                <li>Tiyatro</li>
                <li>Sergi</li>
                <li>Konser</li>
            </ul>
        </div>

        <div className="col col-3">
            asd
        </div>
      </div>
    </footer>
  );
}

export default Footer;
