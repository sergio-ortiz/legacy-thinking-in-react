import React from "react";
import ProductRow from './ProductRow';
import CategoryRow from './ProductCategoryRow';

class ProductTable extends React.Component {
  render() {
    let products = this.props.products;
    const rows = [];

    if (products.length) {
      const categories = products
        .map(product => product.category)
        .filter((category, index, categories) => categories.indexOf(category) === index);

      categories.forEach(category => {
        const categorized = products
          .filter(product => product.category === category)
          .map(product => <ProductRow key={product.id} product={product} />)

        categorized.unshift(<CategoryRow key={category} category={category} />)
        rows.push(...categorized);
      })
    }

    return (
      <table>
        <thead>
          <tr>
            <th style={{textAlign: 'start'}}>Name</th>
            <th style={{textAlign: 'start'}}>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
