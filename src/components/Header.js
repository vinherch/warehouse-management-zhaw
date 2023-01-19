import React from "react";
import { Link } from "react-router-dom";

function Header({ aSideMenueHandler, asideMenueState, headerTitle }) {
  return (
    <header className="header">
      <Link to={"/"}>
        <div className="logo">
          <img src="./assets/warehouse_header.png" alt="Logo Lagerverwaltung" />
        </div>
      </Link>
      <div className="header-title">
        <h2>Lagerverwaltung</h2>
        <h1>{headerTitle}</h1>
      </div>
      <div className="header-menue" onClick={aSideMenueHandler}>
        <span className={`line line1 ${asideMenueState ? "open-l1" : ""}`}></span>
        <span className={`line line2 ${asideMenueState ? "open-l2" : ""}`}></span>
        <span className={`line line3 ${asideMenueState ? "open-l3" : ""}`}></span>
      </div>
    </header>
  );
}

export default Header;
