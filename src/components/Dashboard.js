import React from "react";
import DashboardCard from "./shared/DashboardCard";

function Dashboard() {
  return (
    <div className="container">
      <DashboardCard>
        <div className="card-desc">
          <p>Meine</p>
          <h4>Artikel</h4>
        </div>
        <div className="dashboard-img">
          <img src="./assets/dashboard_articles.png" alt="" />
        </div>
      </DashboardCard>
      <DashboardCard>
        <div className="card-desc">
          <p>Meine</p>
          <h4>Kategorien</h4>
        </div>
        <div className="dashboard-img">
          <img src="./assets/dashboard_categories.png" alt="" />
        </div>
      </DashboardCard>
      <DashboardCard>
        <div className="card-desc">
          <p>Meine</p>
          <h4>Währungen</h4>
        </div>
        <div className="dashboard-img">
          <img src="./assets/dashboard_currencies.png" alt="" />
        </div>
      </DashboardCard>
      <DashboardCard>
        <div className="card-desc">
          <p>Meine</p>
          <h4>Lokationen</h4>
        </div>
        <div className="dashboard-img">
          <img src="./assets/dashboard_locations.png" alt="" />
        </div>
      </DashboardCard>
      <DashboardCard>
        <div className="card-desc">
          <p>Meine</p>
          <h4>Stati</h4>
        </div>
        <div className="dashboard-img">
          <img src="./assets/dashboard_states.png" alt="" />
        </div>
      </DashboardCard>
      <DashboardCard>
        <div className="card-desc">
          <p>Mein</p>
          <h4>Warehouse</h4>
        </div>
        <div className="dashboard-img">
          <img src="./assets/dashboard_warehouse.png" alt="" />
        </div>
      </DashboardCard>
    </div>
  );
}

export default Dashboard;
