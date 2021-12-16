import React from "react";
import styles from "./Home.module.scss";
import Layout from "../../components/layout/Layout/Layout";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div className={styles.home}>
      <Layout>
        <Hero />
      </Layout>
    </div>
  );
};

export default Home;
