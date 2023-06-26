import React from "react";
import ProductRow from './ProductRow';
import CategoryRow from './ProductCategoryRow';

function ProductTable(props) {
  let products = props.products;
  const categories = props.categories
  const productRows = [];
  const tableRows = [];
  if (Array.isArray(products)) {
    products.forEach(product => {
      productRows.push(
        <ProductRow 
          key={product.id} 
          title={product.title} 
          price={product.price} 
          category={product.category}
        />
      )
    });

 
    if (Array.isArray(categories)) {
      categories.forEach(category => {
        const categoryRows = productRows.filter(row => row.props.category === category);
        categoryRows.unshift(<CategoryRow key={category} category={category} />)
        tableRows.push(...categoryRows);
      })
    } }

  return (
    <table>
      <thead>
        <tr>
          <th style={{textAlign: 'start'}}>Name</th>
          <th style={{textAlign: 'start'}}>Price</th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
}

export default ProductTable;
