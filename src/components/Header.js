import React from "react";

function Header() {
  return (
    <header class="header">
      <div class="logo">
        <img src="./assets/warehouse.png" alt="Logo Lagerverwaltung" />
      </div>
      <div class="header-title">
        <h1>Lagerverwaltung</h1>
      </div>
      <div class="header-menue">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
    </header>
  );
}

export default Header;
