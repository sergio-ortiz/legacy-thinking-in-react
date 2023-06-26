import React from "react";

function ProductCategoryRow(props) {
  return (
    <tr>
      <th>{props.category}</th>
    </tr>
  );
}

export default ProductCategoryRow;
