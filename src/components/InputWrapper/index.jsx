import React from "react";
import styles from "./InputWrapper.module.scss";

function InputWrapper({
  id = "",
  label = "",
  helperText = "",
  margin = "",
  keepFocus = false,
  isFocus = false,
  hiddenLabel = false,
  disabled = false,
  error = false,
  fullWidth = false,
  required = false,
  children,
}) {
  const inputMargins = () => {
    switch (margin) {
      case "normal":
        return styles.normal;
      case "dense":
        return styles.dense;
      default:
        return styles.none;
    }
  };

  const showFocusStyles = () => (isFocus || keepFocus) && styles.focus;

  const showErrorStyles = () => error && !disabled && styles.error;

  const showDisabledStyles = () => disabled && styles.disabled;

  return (
    <div
      className={`
        ${styles.inputRow} 
        ${inputMargins()}
        ${fullWidth && styles.fullWidth} 
      `}
    >
      {!hiddenLabel && (
        <label
          className={`
            ${styles.label} 
            ${showFocusStyles()}
            ${showErrorStyles()}
            ${showDisabledStyles()}
          `}
          htmlFor={id}
        >
          {`${label} ${required ? "*" : ""}`}
        </label>
      )}
      <div
        className={`
            ${styles.inputWrapper}
            ${showFocusStyles()}
            ${showErrorStyles()}
            ${showDisabledStyles()}
          `}
      >
        {children}
      </div>

      {helperText !== "" && (
        <p
          className={`
            ${styles.helperText} 
            ${showErrorStyles()}
            ${showDisabledStyles()}
          `}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}

export default InputWrapper;
