import React from "react";
import { SlArrowDown } from "react-icons/sl";
import { LuConciergeBell } from "react-icons/lu";
import "./pending.css";

export default function PendingPatient() {
  return (
    <div className="patientdetails">
      <div className="custom-card-header skyblue-card-header patientdetails-card-header">
        Pending
      </div>
      <div className="patientdetails-card-content">
        <p>Upcoming (2)</p>
        <hr />
        <div className="patientdetails-card-conten">
          <div
            className="profile-info"
            style={{ display: "flex", gap: "5px", padding: "15px 7px" }}
          >
            <img
              src="/passport.png"
              width={60}
              height={64}
              alt="settings icon"
            />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              <p style={{ fontWeight: "600", marginBottom: "0px" }}>
                Jerome Bell
              </p>

              <small>
                <span
                  style={{
                    backgroundColor: "#BDBDBD",
                    padding: "2px",
                    marginRight: "5px",
                    borderRadius: "4px",
                    fontSize: "0.7rem",
                    fontWeight: "600",
                    color: "black",
                  }}
                >
                  NOV{" "}
                </span>{" "}
                procedure
              </small>
              <small
                style={{
                  width: "fit-content",
                  backgroundColor: "#BDBDBD",
                  padding: "2px",
                  fontSize: "0.7rem",
                  fontWeight: "600",
                  color: "black",
                }}
              >
                CC
              </small>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                flexGrow: "1",
                paddingRight: "4px",

                alignItems: "end",
              }}
            >
              <SlArrowDown />
              <small style={{ alignSelf: "center" }}>2.00PM</small>
              <LuConciergeBell style={{ alignSelf: "center" }} />
            </div>
          </div>

          <div
            className="profile-info"
            style={{ display: "flex", gap: "5px", padding: "10px 7px" }}
          >
            <img
              src="/passport.png"
              width={60}
              height={64}
              alt="settings icon"
            />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              <p style={{ fontWeight: "600", marginBottom: "0px" }}>
                Jerome Bell
              </p>

              <small>
                <span
                  style={{
                    backgroundColor: "#BDBDBD",
                    padding: "2px",
                    marginRight: "5px",
                    borderRadius: "4px",
                    fontSize: "0.7rem",
                    fontWeight: "600",
                    color: "black",
                  }}
                >
                  NOV{" "}
                </span>{" "}
                procedure
              </small>
              <small
                style={{
                  width: "fit-content",
                  backgroundColor: "#BDBDBD",
                  padding: "2px",
                  fontSize: "0.7rem",
                  fontWeight: "600",
                  color: "black",
                }}
              >
                CC
              </small>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                flexGrow: "1",
                paddingRight: "4px",

                alignItems: "end",
              }}
            >
              <SlArrowDown />
              <small style={{ alignSelf: "center" }}>2.00PM</small>
              <LuConciergeBell style={{ alignSelf: "center" }} />
            </div>
          </div>
          <div
            className="profile-info"
            style={{ display: "flex", gap: "5px", padding: "10px 7px" }}
          >
            <img
              src="/passport.png"
              width={60}
              height={64}
              alt="settings icon"
            />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              <p style={{ fontWeight: "600", marginBottom: "0px" }}>
                Jerome Bell
              </p>

              <small>
                <span
                  style={{
                    backgroundColor: "#BDBDBD",
                    padding: "2px",
                    marginRight: "5px",
                    borderRadius: "4px",
                    fontSize: "0.7rem",
                    fontWeight: "600",
                    color: "black",
                  }}
                >
                  NOV{" "}
                </span>{" "}
                procedure
              </small>
              <small
                style={{
                  width: "fit-content",
                  backgroundColor: "#BDBDBD",
                  padding: "2px",
                  fontSize: "0.7rem",
                  fontWeight: "600",
                  color: "black",
                }}
              >
                CC
              </small>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                flexGrow: "1",
                paddingRight: "4px",

                alignItems: "end",
              }}
            >
              <SlArrowDown />
              <small style={{ alignSelf: "center" }}>2.00PM</small>
              <LuConciergeBell style={{ alignSelf: "center" }} />
            </div>
          </div>
          <div
            className="profile-info"
            style={{ display: "flex", gap: "5px", padding: "10px 7px" }}
          >
            <img
              src="/passport.png"
              width={60}
              height={64}
              alt="settings icon"
            />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              <p style={{ fontWeight: "600", marginBottom: "0px" }}>
                Jerome Bell
              </p>

              <small>
                <span
                  style={{
                    backgroundColor: "#BDBDBD",
                    padding: "2px",
                    marginRight: "5px",
                    borderRadius: "4px",
                    fontSize: "0.7rem",
                    fontWeight: "600",
                    color: "black",
                  }}
                >
                  NOV{" "}
                </span>{" "}
                procedure
              </small>
              <small
                style={{
                  width: "fit-content",
                  backgroundColor: "#BDBDBD",
                  padding: "2px",
                  fontSize: "0.7rem",
                  fontWeight: "600",
                  color: "black",
                }}
              >
                CC
              </small>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                flexGrow: "1",
                paddingRight: "4px",

                alignItems: "end",
              }}
            >
              <SlArrowDown />
              <small style={{ alignSelf: "center" }}>2.00PM</small>
              <LuConciergeBell style={{ alignSelf: "center" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
