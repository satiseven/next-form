import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsersList } from "../store/actions/userActions";
import { AppState } from "../types";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUsersList());
  }, []);
  const users = useSelector<AppState, AppState["users"]>(
    (state) => state.users
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>React Get Book List!!!!</title>
        <meta name="description" content="React Practice !!!!!!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ul>
          {users.map((user, index) => {
            return <li key={index}>{user.email}</li>;
          })}
        </ul>
      </main>
    </div>
  );
};

export default Home;
