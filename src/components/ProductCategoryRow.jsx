import React from "react";

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr style={{textAlign: 'left'}}>
        <th style={{padding: '0.25rem 0'}}>{category}</th>
      </tr>
    );
  }
}

export default ProductCategoryRow;
