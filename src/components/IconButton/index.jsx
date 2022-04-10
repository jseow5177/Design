import React from "react";
import styles from "./IconButton.module.scss";

function IconButton({
  children,
  size = "md",
  onClick = function () {},
  disabled = false,
}) {
  const buttonSizes = () => {
    switch (size) {
      case "sm":
        return styles.small;
      case "lg":
        return styles.large;
      default:
        return styles.medium;
    }
  };

  return (
    <button
      onClick={onClick}
      className={`${styles.iconButton} ${buttonSizes()}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default IconButton;
