import Head from 'next/head'
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
              <p>This is the staging site for My Online Garden. Please feel free to explore the site and provide feedback.</p>
            </div>
      </main>
    </div>
  )
}
