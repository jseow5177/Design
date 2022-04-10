import React from "react";

function TableCell({ component = "td", children }) {
  const cellComponents = (child) => {
    switch (component) {
      case "th":
        return <th>{child}</th>;
      default:
        return <td>{child}</td>;
    }
  };

  return cellComponents(children);
}

export default TableCell;
