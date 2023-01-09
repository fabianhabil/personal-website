import Head from 'next/head';
import type { NextPage } from 'next';
import Spotify from '../component/Spotify/Spotify';
import Scenery from '../component/3d/scenery/Scenery';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Fabian Habil</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Spotify />
            <Scenery />
        </>
    );
};

export default Home;
