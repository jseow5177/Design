import React, { useState } from "react";
import { SidebarItem } from "..";
import styles from "./Sidebar.module.scss";

function Sidebar({ items = [], open = true, onSelect = function () {} }) {
  const [activeItem, setActiveitem] = useState(0);

  const handleSelect = (i) => {
    setActiveitem(i);
    onSelect(i);
  };

  return (
    <div className={`${styles.sidebar} ${open && styles.open}`}>
      <div className={styles.logo}>
        <span className="material-icons">grid_view</span>
        <h1>Design</h1>
      </div>
      {items.map((item, i) => (
        <SidebarItem
          key={i}
          label={item.label}
          active={activeItem === i}
          onClick={() => handleSelect(i)}
          children={item.children}
        />
      ))}
    </div>
  );
}

export default Sidebar;
