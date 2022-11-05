import { GetServerSideProps } from 'next';

import Head from 'next/head';

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Início</title>
      </Head>
      <div className={styles.container}>
        <img src="./img/logo.png" alt="" />
        <h1>Em Breve!</h1>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {

  return {
    props: {
      
    },
  };
};
