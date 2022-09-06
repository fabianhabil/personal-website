import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
    return (
        <div className='flex min-h-screen flex-col items-center justify-center py-2'>
            <Head>
                <title>Fabian Habil</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
                <h1 className='text-6xl font-bold'>the retirement of u.</h1>
                <h2 className='text-5xl py-10'>coming soon.</h2>
                <h3 className='text-3xl py-1'>fabian habil.</h3>
            </main>
        </div>
    );
};

export default Home;
