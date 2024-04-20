type SearchBoxProps = {
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ searchChange }: SearchBoxProps) => {
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