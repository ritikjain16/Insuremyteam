import React from "react";

const Navbar = ({ mysearch, currentSearch, setcurrentSearch }) => {
  return (
    <div className="navbar">
      <div className="company-name">
        <h4>InsureMyTeam</h4>
      </div>
      <div className="flex">
        <input
          type="text"
          ref={mysearch}
          className="search-box"
          value={currentSearch}
          onChange={(e) => {
            setcurrentSearch(e.target.value);
          }}
          placeholder="Search posts"
        />
      </div>
    </div>
  );
};

export default Navbar;
