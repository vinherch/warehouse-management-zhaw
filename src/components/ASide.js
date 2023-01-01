import React from "react";

function ASide({ asideMenueState, setAsideMenueState }) {
  return (
    <aside className={`aside-container ${asideMenueState ? "open" : ""}`}>
      <div className="aside-menue">
        <div className="aside-menue-section">
          <h4 className="menue-title">Menü</h4>
          <div className="aside-menue-control">
            <ul>
              <li>
                <a href="#">Artikel</a>
              </li>
              <li>
                <a href="#">Kategorien</a>
              </li>
              <li>
                <a href="#">Währungen</a>
              </li>
              <li>
                <a href="#">Lokationen</a>
              </li>
              <li>
                <a href="#">Stati</a>
              </li>
              <li>
                <a href="#">Warehouse</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="aside-menue-section">
          <h4>Kontakt</h4>
          <div className="aside-menue-contact">
            <ul>
              <li>
                <a href="mailto:abc@example.com">Sende E-Mail</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default ASide;
