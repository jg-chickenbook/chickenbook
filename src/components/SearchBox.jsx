import React from "react";
import styled from "styled-components";

const SearchBoxContainer = styled.div`
  padding: 10px;
`
const SearchField = styled.input`
  padding: 15px;
  border-radius: .5rem;
  border-style: solid green;
  border-width: 1px;
  background-color: lightcyan;
`

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