import React from "react";
import {
  SearchBoxContainer,
  SearchField 
} from "./SearchBox.styling";


const SearchBox = ({ searchChange }) => {
  return (
    <SearchBoxContainer>
      <SearchField 
        type="search"
        placeholder="Search members"
        onChange={searchChange}
      />
    </SearchBoxContainer>
    
  );
}

export default SearchBox;