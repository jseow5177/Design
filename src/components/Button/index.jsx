import React from "react";
import styles from "./Button.module.scss";

function Button({
  children,
  startIcon,
  endIcon,
  variant = "contained",
  size = "md",
  disabled = false,
  disableElevation = false,
  disablePress = false,
  onClick = function () {},
  onFocus = function () {},
}) {
  const buttonVariants = () => {
    switch (variant) {
      case "text":
        return styles.text;
      case "outlined":
        return styles.outlined;
      default:
        return styles.contained;
    }
  };

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

  const handleClick = (e) => {
    onClick(e);
    e.target.blur();
  };

  const handleFocus = (e) => {
    onFocus(e);
  };

  return (
    <button
      className={`
        ${styles.button}
        ${buttonSizes()} 
        ${buttonVariants()} 
        ${!disableElevation && styles.elevation} 
        ${disabled && styles.disabled} 
        ${!disablePress && styles.active} 
      `}
      disabled={disabled}
      onClick={handleClick}
      onFocus={handleFocus}
    >
      <>
        {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
        {children}
        {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
      </>
    </button>
  );
}

export default Button;
