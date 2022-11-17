import React, { Fragment } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeadCartButton.module.css";
function HeadCartButton(props) {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
}

export default HeadCartButton;
