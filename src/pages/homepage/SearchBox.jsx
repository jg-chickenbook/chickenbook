import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <>
      <input className="search__input"
        type="search"
        placeholder="Search members"
        onChange={searchChange}
      />
    </>

  );
}

export default SearchBox;