import React from "react";
import mealsimage from "../../assets/meals.jpg";
import HeadCartButton from "./HeadCartButton";
import styles from "./Header.module.css";
function Header(props) {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeadCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsimage} alt="A table delicious food" />
      </div>
    </React.Fragment>
  );
}

export default Header;
