import React from "react";
import styles from "./Button.module.scss";
import { ArrowIcon } from "../icons";

const Button = ({ variant, color, className, children }) => {
  if (variant === "primary") {
    return (
      <a
        className={`${styles.button} ${
          styles[`button--primary-${color}`]
        } ${className}`}
        href="#"
      >
        {children}
      </a>
    );
  } else {
    return (
      <a
        className={`${styles.button} ${
          styles[`button--secondary-${color}`]
        } ${className}`}
        href="#"
      >
        {children}
        <ArrowIcon color={color} className={styles.arrowIcon} />
      </a>
    );
  }
};

export default Button;
