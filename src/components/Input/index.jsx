import React, { forwardRef, Fragment, useState } from "react";
import InputWrapper from "../InputWrapper";
import styles from "./Input.module.scss";

const Input = forwardRef(
  (
    {
      id = "",
      size = "md",
      placeholder = "",
      label = "",
      helperText = "",
      margin = "",
      keepFocus = false,
      hiddenLabel = false,
      disabled = false,
      error = false,
      multiline = false,
      fullWidth = false,
      required = false,
      readOnly = false,
      rows = 3,
      value,
      onChange = undefined, // uncontrolled
      onFocus = function () {},
      onBlur = function () {},
      startIcon,
      endIcon,
    },
    ref
  ) => {
    const [isFocus, setIsFocus] = useState(false);

    const inputSizes = () => {
      switch (size) {
        case "sm":
          return styles.small;
        default:
          return styles.medium;
      }
    };

    const handleFocus = (e) => {
      setIsFocus(true);
      onFocus(e);
    };

    const handleBlur = (e) => {
      setIsFocus(false);
      onBlur(e);
    };

    return (
      <InputWrapper
        id={id}
        label={label}
        helperText={helperText}
        margin={margin}
        keepFocus={keepFocus}
        isFocus={isFocus}
        hiddenLabel={hiddenLabel}
        disabled={disabled}
        error={error}
        fullWidth={fullWidth}
        required={required}
      >
        {multiline ? (
          <textarea
            ref={ref}
            rows={rows}
            id={id}
            className={`${styles.input} ${inputSizes()}`}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            readOnly={readOnly}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          ></textarea>
        ) : (
          <>
            {startIcon && <div className={styles.startIcon}>{startIcon}</div>}
            <input
              ref={ref}
              id={id}
              className={`${styles.input} ${inputSizes()}`}
              placeholder={placeholder}
              disabled={disabled}
              value={value}
              readOnly={readOnly}
              onChange={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {endIcon && <div className={styles.endIcon}>{endIcon}</div>}
          </>
        )}
      </InputWrapper>
    );
  }
);

export default Input;
