import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Ninja.module.css';


export const getStaticProps = async () => {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const posts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            // posts // just ai vabe dileo hto
            ninjas: posts
        },
    }
}

const index = ({ ninjas }) => {
    return (
        <>
            <Head>
                <title>Ninja List | List</title>
                <meta name='keywords' content='ninjas' />
            </Head>
            <div>
                <h1>All Ninja List</h1>
                {ninjas.map(ninja => (
                    <Link href={'/ninja/' + ninja.id} key={ninja.id}>
                        <a className={styles.single}>
                            <h3>{ninja.name}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default index;