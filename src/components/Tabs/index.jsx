import React, { useState } from "react";
import IconButton from "../IconButton";
import styles from "./Tabs.module.scss";

const TabPanel = ({ children, value, index }) => {
  return (
    <div hidden={value !== index} className={styles.tabPanel}>
      {value === index && <>{children}</>}
    </div>
  );
};

const Tab = ({ label, active, onClick }) => {
  return (
    <button
      className={`${styles.tab} ${active && styles.active}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

function Tabs({
  labels = [],
  contents = [],
  value = 0,
  shrinkable = false,
  height = "300px",
  onChange = function () {},
}) {
  const [isShrink, setIsShrink] = useState(false);

  const handleTabClick = (i) => {
    onChange(i);
  };

  const toggleShrink = () => {
    setIsShrink(!isShrink);
  };

  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.controls}>
        {/* Tabs */}
        <div className={styles.tabs}>
          {labels.map((label, i) => (
            <Tab
              key={i}
              label={label}
              active={value === i}
              onClick={() => handleTabClick(i)}
            />
          ))}
          {/* Highlight */}
          <span
            className={styles.highlight}
            style={{
              width: `calc(100% / ${labels.length})`,
              transform: `translateX(${value * 100}%)`,
            }}
          ></span>
        </div>
        {/* Arrow icon */}
        {shrinkable && (
          <IconButton size="md" onClick={toggleShrink}>
            <span
              className={`
                ${"material-icons"} 
                ${styles.arrowIcon} 
                ${isShrink && styles.rotate}
              `}
            >
              expand_more
            </span>
          </IconButton>
        )}
      </div>
      {/* Body content */}
      <div
        style={{ height: !isShrink && height }}
        className={`
          ${styles.body} 
          ${isShrink ? styles.shrink : styles.expand}
        `}
      >
        {contents.map((content, i) => (
          <TabPanel key={i} index={i} value={value}>
            {content}
          </TabPanel>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
