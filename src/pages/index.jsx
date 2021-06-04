import Head from "next/head";
import { useCallback, useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { Main } from "../components/Main";
import styles from "../styles/Home.module.css";

// const handleClick = (e) => {
//   e.preventDefault();
//   alert(123);
// }

export default function Home() {
  const foo = 1;
  const handleClick = useCallback((e) => {
    e.preventDefault();
    alert(foo);
  },[]);
  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    }
  },[]);

  const handleOnClick = useCallback(() => {
    alert("次は10からです")
  },[]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index page </title>
      </Head>
      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
    <button onClick = {handleOnClick}>学習状況</button>
      <Main page="index" />

      <Footer />
    </div>
  );
}
