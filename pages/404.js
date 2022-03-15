import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])
    return (
        <div className='not-found'>
            <p>Oooops.......</p>
            <h2>The page can not be found</h2>
            <p>Back to the <Link href='/'>Home Page</Link></p>
        </div>
    );
};

export default NotFound;