import React from 'react';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {products: []};
  }

  async componentDidMount() {
    await fetch(`https://dummyjson.com/products?limit=0&select=title,price,stock,category,id`)
      .then(res => res.json())
      .then(({products}) => this.setState({products}))
      .catch(error => console.log(error));
  }

  render() {
    const products = this.state.products;
    return (
      <div style={{
          width: 'max-content', 
          margin: 'auto', 
          fontFamily: 'Arial, Helvetica, sans'}}>
        <SearchBar />
        <ProductTable products={products} />
      </div>
    )
  }
}

export default App
