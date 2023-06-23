import React from "react";

function ProductRow(props) {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.price}</td>
    </tr>
  );
}

export default ProductRow;
