import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardCard from "./shared/DashboardCard";

function Dashboard({ setHeaderTitle }) {
  useEffect(() => {
    setHeaderTitle("Dashboard");
  }, []);

  return (
    <div className="container">
      <Link to="/articles" style={{ textDecoration: "none" }}>
        <DashboardCard title={"Meine"} subject="Artikel" imgSrc="./assets/dashboard_articles.png"></DashboardCard>
      </Link>
      <Link to="/categories" style={{ textDecoration: "none" }}>
        <DashboardCard title={"Meine"} subject="Kategorien" imgSrc="./assets/dashboard_categories.png"></DashboardCard>
      </Link>
      <Link to="/currencies" style={{ textDecoration: "none" }}>
        <DashboardCard title={"Meine"} subject="Währungen" imgSrc="./assets/dashboard_currencies.png"></DashboardCard>
      </Link>
      <Link to="/locations" style={{ textDecoration: "none" }}>
        <DashboardCard title={"Meine"} subject="Lokationen" imgSrc="./assets/dashboard_locations.png"></DashboardCard>
      </Link>
      <Link to="/status" style={{ textDecoration: "none" }}>
        <DashboardCard title={"Meine"} subject="Status" imgSrc="./assets/dashboard_status.png"></DashboardCard>
      </Link>
      <Link to="/warehouses" style={{ textDecoration: "none" }}>
        <DashboardCard title={"Mein"} subject="Warehouse" imgSrc="./assets/dashboard_warehouse.png"></DashboardCard>
      </Link>
    </div>
  );
}

export default Dashboard;
