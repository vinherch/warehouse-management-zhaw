import React from "react";
import { Link } from "react-router-dom";

function ASide({ asideMenueState, setAsideMenueState }) {
  return (
    <aside className={`aside-container ${asideMenueState ? "open" : ""}`}>
      <div className="aside-menue">
        <div className="aside-menue-section">
          <h4 className="menue-title">Menü</h4>
          <div className="aside-menue-control">
            <ul>
              <li>
                <Link to="/articles">Artikel</Link>
              </li>
              <li>
                <Link to="/categories">Kategorien</Link>
              </li>
              <li>
                <Link to="/currencies">Währungen</Link>
              </li>
              <li>
                <Link to="/locations">Lokationen</Link>
              </li>
              <li>
                <Link to="/status">Status</Link>
              </li>
              <li>
                <Link to="/warehouses">Warehouse</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default ASide;
