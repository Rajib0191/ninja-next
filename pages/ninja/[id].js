
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths,
        fallback: true // false or 'blocking'
    };
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { ninja: data }
    }
}

const Details = ({ ninja }) => {
    // console.log(ninja)
    return (
        <div>
            <h1>{ninja.name}</h1>
            <p><span>Email</span>: {ninja.email}</p>
            <p><span>Website</span>: {ninja.website}</p>
            <p><span>City</span>: {ninja.address.city}</p>
        </div>
    );
};

export default Details;