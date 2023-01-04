import React from "react";

function DashboardCard({ title, subject, imgSrc }) {
  return (
    <div className="card">
      <div className="card-desc">
        <p>{title}</p>
        <h4>{subject}</h4>
      </div>
      <div className="dashboard-img">
        <img src={imgSrc} alt="" />
      </div>
    </div>
  );
}

export default DashboardCard;
