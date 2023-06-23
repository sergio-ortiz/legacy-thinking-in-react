import React from "react";
import ProductRow from './ProductRow';

function ProductTable(props) {
  const products = props.products;
  const tableRows = [];
  if (Array.isArray(products)) {
    console.log(products.map(p => p.category).sort((a, b) => b.charCodeAt() - a.charCodeAt()));
    products.forEach(product => {
      tableRows.push(
        <ProductRow 
          key={product.id} 
          title={product.title} 
          price={product.price} 
        />
      )
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
        {tableRows}
      </tbody>
    </table>
  );
}

export default ProductTable;
