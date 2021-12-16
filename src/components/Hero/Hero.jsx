import React from "react";
import styles from "./Hero.module.scss";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.contentBox}>
          <h1 className={styles.heading}>
            Create and share your photo stories.
          </h1>
          <p className={styles.description}>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <Button variant="primary" color="light" className={styles.button}>
            Get an invite
          </Button>
        </div>
      </div>
      <div className={styles.image} />
    </div>
  );
};

export default Hero;
