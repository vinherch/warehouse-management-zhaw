import React from "react";

function Header({ aSideMenueHandler, asideMenueState }) {
  return (
    <header className="header">
      <div className="logo">
        <img src="./assets/warehouse_header.png" alt="Logo Lagerverwaltung" />
      </div>
      <div className="header-title">
        <h1>Lagerverwaltung</h1>
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
