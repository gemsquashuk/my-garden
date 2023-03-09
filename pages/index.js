import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Online Garden</title>
        <meta name="description" content="Home for My Online Garden" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>
            Welcome to My Online Garden!
        </h1>
          <div className="d-flex justify-content-center">
              <p className="text-center" style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#1F782B'}}>Sign In</p>
            </div>
      </main>
    </div>
  )
}
