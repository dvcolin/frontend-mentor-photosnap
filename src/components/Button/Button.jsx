import React from "react";
import styles from "./Button.module.scss";

const Button = ({ variant, color, className, children }) => {
  if (variant === "primary") {
    return (
      <a
        className={`${styles.button} ${
          styles[`button--${color}`]
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
          styles[`button--${color}`]
        } ${className}`}
        href="#"
      >
        {children}
      </a>
    );
  }
};

export default Button;
