import React from "react";
import styles from "./Header.module.scss";
import logo from "../../../assets/shared/desktop/logo.svg";
import Button from "../../Button/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Photosnap logo" />
      <Button variant="primary" color="dark" className={styles.button}>
        Get an invite
      </Button>
    </header>
  );
};

export default Header;
