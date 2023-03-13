import React from "react";
import styles from "../styles/Categorycard.module.css";

export const Categorycard = ({ src, title }) => {
  return (
    <div className={styles.categorycard}>
      <img src={src} alt="" width="50px" />
      <p>{title}</p>
    </div>
  );
};
