import React from "react";
import styles from "./Header.module.scss";
import logo from "../../../assets/shared/desktop/logo.svg";
import NavLink from "../../NavLink/NavLink";
import Button from "../../Button/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Photosnap logo" />
      <div>
        <NavLink>Stories</NavLink>
        <NavLink>Features</NavLink>
        <NavLink>Pricing</NavLink>
      </div>
      <Button variant="primary" color="dark">
        Get an invite
      </Button>
    </header>
  );
};

export default Header;
