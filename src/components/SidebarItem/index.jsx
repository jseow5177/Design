import React, { useState } from "react";
import styles from "./SidebarItem.module.scss";

function SidebarItem({
  active = false,
  label = "",
  children = [],
  onClick = function () {},
}) {
  const [activeChild, setActiveChild] = useState(-1);

  const handleParentClick = () => {
    setActiveChild(-1);
    onClick();
  };

  const handleChildClick = (i) => {
    setActiveChild(i);
    onClick();
  };

  return (
    <>
      <button
        className={`${styles.link} ${
          active && activeChild === -1 && styles.active
        }`}
        onClick={handleParentClick}
      >
        <span
          className={`material-icons ${
            active && children.length !== 0 && styles.rotate
          }`}
        >
          keyboard_arrow_right
        </span>
        {label}
      </button>
      {children.map((child, i) => (
        <button
          key={i}
          className={`${styles.link} ${styles.indentLeft} ${
            active ? styles.show : styles.hidden
          } ${activeChild === i && styles.active}`}
          onClick={() => handleChildClick(i)}
        >
          <span className={`material-icons`}>keyboard_arrow_right</span>
          {child.label}
        </button>
      ))}
    </>
  );
}

export default SidebarItem;
