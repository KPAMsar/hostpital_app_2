import React from "react";
import "./table.css";
import { IoIosMale } from "react-icons/io";

export default function Table() {
  return (
    <>
      <div className="header-bar">Patient Movement Tracker</div>
      <div className="patient-movement-tracker">
        <div className="tracker-header">
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <table className="table-container">
          <thead>
            <tr>
              <th
                colSpan={4}
                className="th-1"
                style={{ backgroundColor: "#A1D2FF66" }}
              >
                CONSULTATION
              </th>
              <th
                colSpan={4}
                className="th-1"
                style={{ backgroundColor: "#73BCFF66" }}
              >
                DIAGNOSTICS
              </th>
              <th
                colSpan={2}
                className="th-1"
                style={{ backgroundColor: "#A1D2FF66" }}
              >
                POST CONSULTATION
              </th>
            </tr>
            <tr className="tr1">
              <th>Patient Details</th>
              <th>Pre-Assessment</th>
              <th>Waiting Area</th>
              <th>Consultation Room</th>
              <th>Billing Counter</th>
              <th>Service Area-1</th>
              <th>Service Area-2</th>
              <th>Service Area-3</th>
              <th>Followup Bay</th>
              <th>Prescription</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="patient-details">
                  <span className="name">Albert Flores</span>
                  <span className="id">MRN: AB12345</span>
                  <span className="gen">
                    <IoIosMale />
                    34Y
                  </span>
                </div>
              </td>
              <td className="status-green">
                <img src="/icons/yes.png" alt="" />
              </td>
              <td className="status-yellow">
                {" "}
                <img src="/icons/yes.png" alt="" />
              </td>
              <td className="status-red">
                {" "}
                <img src="/icons/yes.png" alt="" />
              </td>
              <td className="status-yellow">
                {" "}
                <img src="/icons/green-run.png" alt="" />
              </td>
              <td className="">
                {" "}
                <img src="/icons/red-run.png" alt="" />
              </td>
              <td className="">
                {" "}
                <img src="/icons/red-run.png" alt="" />
              </td>
              <td className="">
                {" "}
                <img src="/icons/red-run.png" alt="" />
              </td>
              <td className="">
                {" "}
                <img src="/icons/red-run.png" alt="" />
              </td>
              <td className="">
                {" "}
                <img src="/icons/red-run.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <div className="patient-details">
                  <span className="name">Kristin Watson</span>
                  <span className="id">MRN: AB12345</span>
                  <span className="gen">
                    <IoIosMale />
                    34Y
                  </span>
                </div>
              </td>
              <td className="status-red">
                <img src="/icons/yes.png" alt="" />
              </td>
              <td className="">
                <img src="/icons/yellow-run.png" alt="" />
              </td>
              <td className="">
                <img src="/icons/yellow-run.png" alt="" />
              </td>
              <td className="status-green">
                <img src="/icons/yes.png" alt="" />
              </td>
              <td className="status-yellow">
                <img src="/icons/yes.png" alt="" />
              </td>
              <td className="status-yellow">
                <img src="/icons/yes.png" alt="" />
              </td>
              <td className="status-red">
                <img src="/icons/yes.png" alt="" />
              </td>
              <td className="status-green">
                <img src="/icons/green-run.png" alt="" />
              </td>
              <td className="">
                <img src="/icons/red-run.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <div className="patient-details">
                  <span className="name">Albert Flores</span>
                  <span className="id">MRN: AB12345</span>
                  <span className="gen">
                    <IoIosMale />
                    34Y
                  </span>
                </div>
              </td>
              <td className="status-green">
                <img src="/icons/yes.png" alt="" />
              </td>
              <td className="status-red">
                <img src="/icons/green-run.png" alt="" />
              </td>
              <td className="">
                <img src="/icons/red-run.png" alt="" />
              </td>
              <td className="">
                <img src="/icons/red-run.png" alt="" />
              </td>
              <td className="">
                <img src="/icons/red-run.png" alt="" />
              </td>
              <td className="">
                <img src="/icons/red-run.png" alt="" />
              </td>
              <td className="">
                <img src="/icons/red-run.png" alt="" />
              </td>
              <td className="">
                <img src="/icons/red-run.png" alt="" />
              </td>
              <td className="">
                <img src="/icons/red-run.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <div className="patient-details">
                  <span className="name">Kristin Watson</span>
                  <span className="id">MRN: AB12345</span>
                  <span className="gen">
                    <IoIosMale />
                    34Y
                  </span>
                </div>
              </td>
              <td className="status-red">
                <img src="/icons/yes.png" alt="" />
              </td>
              <td className="">
                <img src="/icons/yellow-run.png" alt="" />
              </td>
              <td className="">
                <img src="/icons/yellow-run.png" alt="" />
              </td>
              <td className="status-green">
                <img src="/icons/yes.png" alt="" />
              </td>
              <td className="status-yellow">
                <img src="/icons/yes.png" alt="" />
              </td>
              <td className="status-yellow">
                <img src="/icons/yes.png" alt="" />
              </td>
              <td className="status-red">
                <img src="/icons/yes.png" alt="" />
              </td>
              <td className="status-green">
                <img src="/icons/green-run.png" alt="" />
              </td>
              <td className="">
                <img src="/icons/red-run.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <div className="patient-details">
                  <span className="name">Brooklyn Simmons</span>
                  <span className="id">MRN: AB12345</span>
                  <span className="gen">
                    <IoIosMale />
                    34Y
                  </span>
                </div>
              </td>
              <td className="status-green">
                <img src="/icons/yes.png" alt="" />
              </td>
              <td className="status-red">
                <img src="/icons/green-run.png" alt="" />
              </td>
              <td className="">
                <img src="/icons/red-run.png" alt="" />
              </td>
              <td className="">
                <img src="/icons/red-run.png" alt="" />
              </td>
              <td className="">
                <img src="/icons/red-run.png" alt="" />
              </td>
              <td className="">
                <img src="/icons/red-run.png" alt="" />
              </td>
              <td className="">
                <img src="/icons/red-run.png" alt="" />
              </td>
              <td className="">
                <img src="/icons/red-run.png" alt="" />
              </td>
              <td className="">
                <img src="/icons/red-run.png" alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
