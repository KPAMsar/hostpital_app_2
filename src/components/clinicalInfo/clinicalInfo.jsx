import React from "react";
import "./clinicalInfo.css";
import MyProgressBar from "../progressBar/progressBar";

export default function ClinicalInfo() {
  return (
    <div className="card-1 clinical">
      <div className="custom-card-header blue-card-header clinical-info-card">
        Clinical Benchmarking
        <div className="settings-icon">
          <img src="/settings.png" alt="settings icon" />
        </div>
      </div>
      <div className="clinical-info-container">
        {/* TOTAL AVERAGE */}
        <div className="clinical-content total-average">
          <div className="clinical-breakdown">
            <div className="clinical-content-item">
              TOTAL AVERAGE <span className="percentage">78%</span>
            </div>
            <MyProgressBar now={78} label="78%" color="success" />
          </div>
        </div>
        <div className="vertical-line"></div>
        {/* Parameters */}
        <div className="clinical-content">
          <div className="clinical-breakdown">
            <div className="clinical-content-item">
              Parameter-1 <span className="percentage">65%</span>
            </div>
            <MyProgressBar now={65} label="65%" color="success" />
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="clinical-content">
          <div className="clinical-breakdown">
            <div className="clinical-content-item">
              Parameter-2 <span className="percentage">48%</span>
            </div>
            <MyProgressBar now={48} label="48%" color="warning" />
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="clinical-content">
          <div className="clinical-breakdown">
            <div className="clinical-content-item">
              Parameter-3 <span className="percentage">25%</span>
            </div>
            <MyProgressBar now={25} label="25%" color="danger" />
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="clinical-content">
          <div className="clinical-breakdown">
            <div className="clinical-content-item">
              Parameter-4 <span className="percentage">62%</span>
            </div>
            <MyProgressBar now={62} label="62%" color="success" />
          </div>
        </div>
      </div>
    </div>
  );
}
