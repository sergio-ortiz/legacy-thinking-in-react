import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(event) {
    this.props.onFilterTextChange(event.target.value);
  }

  handleInStockChange() {
    this.props.onInStockChange();
  }

  render() {
    return (
      <form style={{padding: '0.5rem 0'}}>
        <input
          value={this.props.filterText} 
          onChange={this.handleFilterTextChange}
          placeholder="Search..." />
        <label style={{display: 'block'}}>
          <input 
            type="checkbox" 
            checked={this.props.inStockOnly} 
            onChange={this.handleInStockChange} 
            style={{margin: '0.5rem 0'}}/>
          {' '}Only show products in stock
        </label>
      </form>
    );
  }
}

export default SearchBar;
