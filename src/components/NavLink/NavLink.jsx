import React from "react";
import styles from "./NavLink.module.scss";

const NavLink = ({ children }) => {
  return (
    <a className={styles.navLink} href="#">
      {children}
    </a>
  );
};

export default NavLink;
