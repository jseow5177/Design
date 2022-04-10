import React, { useState, useRef } from "react";
import { IconButton, Input } from "..";
import { useOutsideClick } from "../../utils/hooks";
import styles from "./Select.module.scss";

const MultiSelect = ({ label = "" }) => <div>{label}</div>;

function Select({
  id = "",
  size = "md",
  placeholder = "",
  label = "",
  helperText = "",
  margin = "",
  hiddenLabel = false,
  disabled = false,
  error = false,
  fullWidth = false,
  required = false,
  value = null,
  multiValues = [],
  onSelect = function () {},
  maxHeight = "300px",
  clearable = false,
  multi = false,
  options = [],
}) {
  const divRef = useRef(null);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(-1);
  const [keepFocus, setKeepFocus] = useState(false);

  useOutsideClick(divRef, () => {
    setKeepFocus(false);
    setShowOptions(false);
  });

  const handleSelect = (option, index) => {
    onSelect(option);

    setSelectedOption(index);
    setKeepFocus(true);
    setShowOptions(false);
  };

  const handleClear = () => {
    handleSelect(null, -1);
  };

  const handleFocus = () => {
    if (!disabled) {
      setKeepFocus(true);
      setShowOptions(true);
    }
  };

  return (
    <div ref={divRef} className={styles.dropdown}>
      {multi &&
        multiValues.map((value, index) => (
          <MultiSelect key={index} label={value.label} />
        ))}
      <Input
        id={id}
        size={size}
        placeholder={placeholder}
        label={label}
        helperText={helperText}
        margin={margin}
        hiddenLabel={hiddenLabel}
        disabled={disabled}
        error={error}
        fullWidth={fullWidth}
        required={required}
        onFocus={handleFocus}
        keepFocus={keepFocus}
        value={!multi && value && value.label ? value.label : ""}
        readOnly
        endIcons={[
          ...(clearable
            ? [
                <IconButton size="sm" onClick={handleClear} disabled={disabled}>
                  <span className={`${"material-icons"} ${styles.selectIcon}`}>
                    clear
                  </span>
                </IconButton>,
              ]
            : []),
          <span
            className={`${"material-icons"} ${styles.selectIcon}`}
            onClick={handleFocus}
          >
            keyboard_arrow_down
          </span>,
        ]}
      />
      {showOptions && (
        <div className={styles.dropdownItems} style={{ maxHeight: maxHeight }}>
          {options.map((option, index) => (
            <button
              key={index}
              className={`
                ${styles.dropdownItem} 
                ${index === selectedOption && styles.selected}
              `}
              onClick={() => handleSelect(option, index)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
