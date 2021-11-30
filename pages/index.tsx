import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>React Get Book List</title>
        <meta name="description" content="React Redux Practice !!!!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>Still it Works</h2>
      </main>
    </div>
  );
};

export default Home;
