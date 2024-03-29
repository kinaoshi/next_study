import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import { Main } from '../components/Main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>about page</title>
      </Head>
      <Header />
      <Main  page="about"/>
     <Footer />
    </div>
  );
}
