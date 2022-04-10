import React from "react";
import { IconButton } from "../../components";
import styles from "./Header.module.scss";

function Header({ title = "", toggleSidebar = function () {} }) {
  return (
    <header className={styles.header}>
      <IconButton onClick={toggleSidebar}>
        <span className="material-icons">menu</span>
      </IconButton>
      {title !== "" && <h1 className={styles.title}>{title}</h1>}
    </header>
  );
}

export default Header;
