import React from "react";

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const color = product.stock > 20 ? 'black' : 'red';
    return (
      <tr style={{color}}>
        <td style={{padding: '0.25rem 0'}}>{product.title}</td>
        <td style={{padding: '0.25rem 0'}}>{product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
