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
	const [text, setText] = useState("");
	const [isShow, setIsShow] = useState(true);

	const handleClick = useCallback(
		(e) => {
			if (count < 10) {
				setCount((count) => count + 1);
			}
		},
		[count]
	);

	useEffect(() => {
		document.body.style.backgroundColor = "lightblue";
		return () => {
			document.body.style.backgroundColor = "";
		};
	}, [count]);

	const handleChange = useCallback((e) => {
		if (e.target.value.length >= 5) {
			alert("5文字以内にして下さい");
			return;
		}
		setText(e.target.value.trim());
	}, []);
	console.log(text);
  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
  },[])
	return (
		<div className={styles.container}>
			<Head>
				<title>Index page </title>
			</Head>
			<Header />
			{isShow ? <h1>{count}</h1> : null}
			<button onClick={handleClick}>ボタン</button>
			<button
				onClick={handleDisplay}
			>
				{isShow ? "非表示" : "表示"}
			</button>
			<input type="text" value={text} onChange={handleChange} />

			<Main page="index" />

			<Footer />
		</div>
	);
}
