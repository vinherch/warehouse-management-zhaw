import React from "react";
import { Link } from "react-router-dom";
import DashboardCard from "./shared/DashboardCard";

function Dashboard() {
  return (
    <div className="container">
      <Link to="/articles" style={{ textDecoration: "none" }}>
        <DashboardCard>
          <div className="card-desc">
            <p>Meine</p>
            <h4>Artikel</h4>
          </div>
          <div className="dashboard-img">
            <img src="./assets/dashboard_articles.png" alt="" />
          </div>
        </DashboardCard>
      </Link>
      <Link to="/categories" style={{ textDecoration: "none" }}>
        <DashboardCard>
          <div className="card-desc">
            <p>Meine</p>
            <h4>Kategorien</h4>
          </div>
          <div className="dashboard-img">
            <img src="./assets/dashboard_categories.png" alt="" />
          </div>
        </DashboardCard>
      </Link>
      <Link to="/currencies" style={{ textDecoration: "none" }}>
        <DashboardCard>
          <div className="card-desc">
            <p>Meine</p>
            <h4>Währungen</h4>
          </div>
          <div className="dashboard-img">
            <img src="./assets/dashboard_currencies.png" alt="" />
          </div>
        </DashboardCard>
      </Link>
      <Link to="/locations" style={{ textDecoration: "none" }}>
        <DashboardCard>
          <div className="card-desc">
            <p>Meine</p>
            <h4>Lokationen</h4>
          </div>
          <div className="dashboard-img">
            <img src="./assets/dashboard_locations.png" alt="" />
          </div>
        </DashboardCard>
      </Link>
      <Link to="/status" style={{ textDecoration: "none" }}>
        <DashboardCard>
          <div className="card-desc">
            <p>Meine</p>
            <h4>Status</h4>
          </div>
          <div className="dashboard-img">
            <img src="./assets/dashboard_states.png" alt="" />
          </div>
        </DashboardCard>
      </Link>
      <Link to="/warehouses" style={{ textDecoration: "none" }}>
        <DashboardCard>
          <div className="card-desc">
            <p>Mein</p>
            <h4>Warehouse</h4>
          </div>
          <div className="dashboard-img">
            <img src="./assets/dashboard_warehouse.png" alt="" />
          </div>
        </DashboardCard>
      </Link>
    </div>
  );
}

export default Dashboard;
