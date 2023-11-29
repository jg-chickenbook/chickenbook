import React from "react";
import styled from "styled-components";

const SearchBoxContainer = styled.div`
  padding: 10px;
`
const SearchField = styled.input`
  padding: 15px;
  background-color: #FBFCD3;
  border-radius: 0.7rem;
  border: 2px solid #191919;
  outline: none;

  &:focus {
    background-color: white;
  }
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