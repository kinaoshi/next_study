import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { Main } from "../components/Main";
import styles from "../styles/Home.module.css";

// const handleClick = (e) => {
//   e.preventDefault();
//   alert(123);
// }

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    setCount ((count) => count + 1);
    setCount ((count) => count + 1);

  };
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    }
  },[]);

  const handleOnClick = useCallback(() => {
    alert("次は12からです")
  },[]);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Index page </title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>
        ボタン
      </button>
    <button onClick = {handleOnClick}>学習状況</button>
      <Main page="index" />

      <Footer />
    </div>
  );
}
