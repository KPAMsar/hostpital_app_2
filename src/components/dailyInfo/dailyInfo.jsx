import React from "react";
import "./dailyInfo.css";

export default function DailyInfo() {
  return (
    <div className="card-1">
      <div className="custom-card-header blue-card-header daily-info-card">
        Daily Information
      </div>
      <div className="daily-info-container">
        <div className="daily-content">
          <div className="daily-content-item">
            Total Applicants <span className="in-pat-count">08</span>
          </div>
          <div className="daily-content-item">
            Total Visit<span className="total-visit-count">12</span>
          </div>
        </div>
        <div className="daily-content">
          <div className="daily-content-item">
            In Patient<span className="in-pat-count">08</span>
          </div>
          <div className="daily-content-item">
            Out Patient<span className="out-pat-count">04</span>
          </div>
        </div>
      </div>
    </div>
  );
}
