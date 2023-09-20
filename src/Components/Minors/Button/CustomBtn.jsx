import React from "react";
import styles from "./ButtonStyles.module.css";

function CustomBtn(props) {
  return (
    <div className={`${styles.button} ${styles[props.color]}`}>
      {props.text}
    </div>
  );
}

export default CustomBtn;
