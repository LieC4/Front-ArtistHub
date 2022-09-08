import "./Searchbar.css"

const SearchBar = ({setFilterWord}) => {
    return (
        <div className="busqueda">
        <input 
        type="text"
        id="search"
        className="searchbar"
        onChange={() => setFilterWord(search.value.toLowerCase())}
        placeholder="Search by..." />
        </div>
    )
}

export default SearchBar;