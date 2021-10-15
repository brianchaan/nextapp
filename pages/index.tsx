import type { NextPage } from 'next';
import Head from 'next/head';
import SeoHeader from '../components/SeoHeader';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <SeoHeader></SeoHeader>
      <div className={styles.container}>
        <Head>
          <title>H1 Web Development</title>
          <meta name="description" content="Test" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>Hello?</main>

        <footer className={styles.footer}></footer>
      </div>
    </>
  );
};

export default Home;
