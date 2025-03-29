import styled from "styled-components";

type SearchBoxProps = {
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBoxComponent = ({ searchChange }: SearchBoxProps) => {
  return (
    <>
      <SearchBox
        type="search"
        placeholder="Search members"
        onChange={searchChange}
      />
    </>

  );
};

const SearchBox = styled.input`
  padding: 0.938rem;
  background-color: #FBFCD3;
  border-radius: 0.7rem;
  border: 0.125rem solid #191919;
  outline: none;
  margin-left: 0.625rem;
  &:focus {
    background-color: white;
  }

  @media (min-width: 992px) {
    min-width: 20rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    order: 3;
  }
`;

export default SearchBoxComponent;