import styled from "styled-components";

type SearchBoxProps = {
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ searchChange }: SearchBoxProps) => {
  return (
    <>
      <StyledSearchBox
        type="search"
        placeholder="Search members"
        onChange={searchChange}
      />
    </>

  );
};

const StyledSearchBox = styled.input`
  padding: 15px;
  background-color: #FBFCD3;
  border-radius: 0.7rem;
  border: 2px solid #191919;
  outline: none;
  margin-left: 10px;
  &:focus {
    background-color: white;
  }

  @media (max-width: 768px) {
    width: 100%;
    order: 3;
  }
`;

export default SearchBox;