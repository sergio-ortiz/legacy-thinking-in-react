import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <form style={{padding: '0.5rem 0'}}>
        <input placeholder="Search..." />
        <label style={{display: 'block'}}>
          <input type="checkbox" style={{margin: '0.5rem 0'}}/>
          {' '}Only show products in stock
        </label>
      </form>
    );
  }
}

export default SearchBar;
