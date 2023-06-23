import React from "react";

function SearchBar(props) {
  return (
    <div style={{padding: '0.5rem 0'}}>
      <input placeholder="Search..." />
      <label style={{display: 'block'}}>
        <input type="checkbox" style={{margin: '0.5rem 0'}}/>
        {' '}Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;
