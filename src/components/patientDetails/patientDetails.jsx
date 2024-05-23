import React from "react";
import HeaderBar from "../headerBar";
import "./patientDetails.css";
import PendingPatient from "./components/pending";
import InProgress from "./components/inProgress/inprogress";
import Completed from "./components/completed/completed";
import ConsultationRequest from "./consultationRequest/consultationRequest";
export default function PatientDetails() {
  return (
    <div className="">
      <HeaderBar />
      <div className="patient-main-container">
        <div className="patient-container-1">
          <PendingPatient />
          <InProgress />
          <Completed />
        </div>
        <div className="patient-container-2">
          <ConsultationRequest />
        </div>
      </div>
    </div>
  );
}
