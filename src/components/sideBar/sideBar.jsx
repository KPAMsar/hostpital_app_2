import React from "react";
import "./sideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faCalendarAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/logo.png" />
      </div>
      <div className="menu">
        <div className="menu-item">
          <img src="/dash.png" />
        </div>
        <div className="menu-item">
          <img src="/icons/bell-icon.png" />
        </div>
        <div className="menu-item">
          <img src="/icons/invoice.png" />
        </div>
        <div className="menu-item">
          <img src="/icons/Approvals.png" />
        </div>
        <div className="menu-item">
          <img src="/icons/account.png" />
        </div>
        <div className="menu-item">
          <img src="/icons/ledger.png" />
        </div>

        <div className="menu-item">
          <img src="/icons/dots.png" />
        </div>
      </div>
    </div>
  );
}
