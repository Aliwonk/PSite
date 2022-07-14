import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alpha</title>
      </Head>
      <Header />
      <div>
        Hello world
      </div>
    </div>
  )
}
