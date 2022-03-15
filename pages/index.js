import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Hello Next Js</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Duis quis erat ac orci rutrum iaculis a nec risus. Donec id nunc viverra,
          facilisis lectus a, venenatis velit. Quisque nulla dui, laoreet malesuada augue porttitor,
          sagittis sodales sapien. Vivamus placerat, est et rhoncus varius, sem augue finibus libero,
          vitae malesuada turpis neque ac erat.
        </p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Duis quis erat ac orci rutrum iaculis a nec risus. Donec id nunc viverra,
          facilisis lectus a, venenatis velit. Quisque nulla dui, laoreet malesuada augue porttitor,
          sagittis sodales sapien. Vivamus placerat, est et rhoncus varius, sem augue finibus libero,
          vitae malesuada turpis neque ac erat.
        </p>
        <Link href='/ninja'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
