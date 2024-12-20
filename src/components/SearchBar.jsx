// eslint-disable-next-line react/prop-types
const SearchBar = ({ searchTerm, onSearchChange }) => (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-bar"
      />
    </div>
  );
  
  export default SearchBar;
  