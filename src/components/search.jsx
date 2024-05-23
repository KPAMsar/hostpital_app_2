import React from "react";

export default function Search() {
  return (
    <form action="" className="search-form">
      <div className="search-input-container">
        <img src="/search.png" alt="Search Icon" className="search-icon" />

        <input
          type="text"
          name="search"
          placeholder="Search"
          className="search-input"
        />
      </div>
    </form>
  );
}
