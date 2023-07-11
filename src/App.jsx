import React from 'react';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {products: [], inStockOnly: false, filterText: ''};

    this.handleInStockChange = this.handleInStockChange.bind(this);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  async componentDidMount() {
    await fetch(`https://dummyjson.com/products?limit=0&select=title,description,brand,price,stock,category,id`)
      .then(res => res.json())
      .then(({products}) => this.setState({products}))
      .catch(error => console.log(error));
  }

  handleInStockChange() {
    this.setState(state => ({inStockOnly: !state.inStockOnly}));
  }

  handleFilterTextChange(value) {
    this.setState({filterText: value});
  }

  render() {
    const products = this.state.products;
    const inStockOnly = this.state.inStockOnly;
    const filterText = this.state.filterText;

    return (
      <div style={{
          width: 'max-content', 
          margin: 'auto', 
          fontFamily: 'Arial, Helvetica, sans'}}>
        <SearchBar 
          filterText={filterText} 
          inStockOnly={inStockOnly} 
          onInStockChange={this.handleInStockChange}
          onFilterTextChange={this.handleFilterTextChange} />
        <ProductTable 
          products={products}
          inStockOnly={inStockOnly}
          filterText={filterText} />
      </div>
    )
  }
}

export default App
