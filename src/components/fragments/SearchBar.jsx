const SearchBar = ({handleSearch}) => {
  return (
    <input
      type="search"
      placeholder="Search notes ..."
      className="input input-bordered w-full max-w-md"
      name="title"
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
