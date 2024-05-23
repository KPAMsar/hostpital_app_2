import React from "react";
import { SlArrowDown } from "react-icons/sl";
import { LuConciergeBell } from "react-icons/lu";
import { IoIosMale } from "react-icons/io";
import "./consultationRequst.css";
// import "./consultationRequst.css";

export default function ConsultationRequest() {
  return (
    <>
      <div className="patientdetails">
        <div
          className="custom-card-header skyblue-card-header patientdetails-card-header"
          style={{ width: "48dvw" }}
        >
          Cross Consultation Request
        </div>
        <div className="patientdetails-card-content" style={{ width: "48dvw" }}>
          <p>Check Out(1)</p>
          <hr />
          <div className="patientdetails-cont">
            <div>
              <h4 className="title">PATIENT DETAILS</h4>
              <p className="name">Leslie Alexander</p>
              <span className="code">MRN: AB12345</span>
              <p>
                <span>
                  <IoIosMale />
                  34Y
                </span>
              </p>

              <p className="name">Leslie Alexander</p>
              <span className="code">MRN: AB12345</span>
              <p>
                <span>
                  <IoIosMale />
                  34Y
                </span>
              </p>
            </div>

            <div>
              <h4 className="title">Consultant details</h4>
              <p className="name">Dr. Bessie Cooper</p>
              <span className="code">MRN: AB12345</span>
              <p>
                <span>
                  <IoIosMale />
                  34Y
                </span>
              </p>

              <p className="name">Leslie Alexander</p>
              <span className="code">MRN: AB12345</span>
              <p>
                <span>
                  <IoIosMale />
                  34Y
                </span>
              </p>
            </div>

            <div>
              <h4 className="title">PATIENT DETAILS</h4>
              <p className="name">Leslie Alexander</p>
              <span className="code">MRN: AB12345</span>
              <p>
                <span>
                  <IoIosMale />
                  34Y
                </span>
              </p>

              <p className="name">Leslie Alexander</p>
              <span className="code">MRN: AB12345</span>
              <p>
                <span>
                  <IoIosMale />
                  34Y
                </span>
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
