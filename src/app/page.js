import SideBar from "@/components/sideBar/sideBar";
import "./styles.css";
import Header from "@/components/header/header";
import DailyInfo from "@/components/dailyInfo/dailyInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import ClinicalInfo from "@/components/clinicalInfo/clinicalInfo";
import PatientDetails from "@/components/patientDetails/patientDetails";
import Table from "@/components/table/table";

export default function Home() {
  return (
    <div className="body-container">
      <SideBar />

      <div className="main-content">
        <Header />
        <div className="p-2">
          <div className="d-md-flex justify-content-between details-container">
            <DailyInfo />
            <ClinicalInfo />
          </div>

          <div className="my-2">
            <PatientDetails />
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
}
