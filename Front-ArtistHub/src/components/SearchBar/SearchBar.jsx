import "./Searchbar.css";

const SearchBar = ({ setFilterUser }) => {
  return (
    <input
      type="text"
      id="search"
      className="searchbar"
      onChange={(ev) => setFilterUser(ev.target.value)}
      placeholder="Search by..."
    />
  );
};

export default SearchBar;
