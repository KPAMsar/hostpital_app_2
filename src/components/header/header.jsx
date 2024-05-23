import React from "react";
import Image from "next/image";
import "./header.css";
import Search from "../search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="header">
      <div className="">
        <b className="logo-text">EMR</b>
      </div>
      <div className="user-profile">
        <div className="">
          <Search />
        </div>

        {/* <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <FontAwesomeIcon icon={faSearch} className="search-icon" /> */}
        <span>Eleanor Pen</span>
        {/* <Image src="user-profile.png" alt="User Profile" /> */}
      </div>
    </header>
  );
}

export default Header;
