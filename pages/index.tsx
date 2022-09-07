import Head from 'next/head';
import CustomImage from '../component/image/customimage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import type { spotifySongTypes } from '../types/spotify-song-types';

const Home: NextPage = () => {
    const dataLagu: string[] = [
        'A Day That Feels Better',
        'Please Baby Please',
        'Jealousy',
        'I Got To Get You',
        'Closure',
        'Untitled',
        'Lover Stay',
        'Modern Love',
        'The Retirement of U',
        'Deeper',
        'Live Forever',
        'Be Okay Again Today',
        'Intentions',
        'To The Bone'
    ];
    const [index, setIndex] = useState<number>(0);
    const [playing, setPlaying] = useState<boolean | null>(null);
    const [error, setError] = useState<boolean>(false);
    const [spotifySong, setSpotifySong] = useState<spotifySongTypes>({
        timestamp: new Date(),
        artistName: '',
        artistLink: '',
        songName: '',
        songLink: '',
        albumLink: ''
    });

    const getStatusSpotify = async () => {
        try {
            const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_SPOTIFY_KEY}`,
                    'Content-type': 'application/json'
                }
            });
            if (response.data) {
                if (response.data.is_playing) {
                    setPlaying(true);
                } else {
                    setPlaying(false);
                }
                setSpotifySong({
                    ...spotifySong,
                    timestamp: response.data.timestamp,
                    artistName: response.data.item.artists[0].name,
                    artistLink: response.data.item.artists[0].external_urls.spotify,
                    songName: response.data.item.name,
                    songLink: response.data.item.external_urls.spotify,
                    albumLink: response.data.item.album.images[0].url
                });
            }
        } catch (e) {
            setError(true);
            setPlaying(false);
        }
    };

    useEffect(() => {
        getStatusSpotify();
    }, []);

    useEffect(() => {
        const intervalTest = setInterval(() => {
            const random = Math.floor(Math.random() * dataLagu.length - 1);
            if (random !== index && random !== -1) {
                setIndex(random);
            } else {
                setIndex(() => Math.floor(Math.random() * dataLagu.length - 1));
            }
        }, 1000);
        return () => clearInterval(intervalTest);
    }, []);

    return (
        <>
            <Head>
                <title>Fabian Habil</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            {playing !== null && (
                <div className='flex min-h-screen flex-col items-center justify-center py-2'>
                    <main className='flex w-full flex-col items-center justify-center px-20 text-center gap-10'>
                        <h1 className='text-6xl font-bold'>{dataLagu[index]}</h1>
                        <h2 className='text-5xl'>coming soon.</h2>
                        {!error && (
                            <div className='flex flex-col gap-3'>
                                <p className='text-xl'>
                                    {playing ? 'currently playing on ' : 'last played on '}
                                    <a
                                        className='text-green-600 font-semibold'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        href='https://open.spotify.com/user/fabian6677'
                                    >
                                        spotify
                                    </a>
                                </p>
                                <CustomImage
                                    priority={true}
                                    src={spotifySong.albumLink}
                                    width='100%'
                                    maxWidth='400px'
                                    alt='test'
                                />
                                <p className='text-xl font-bold'>
                                    <a
                                        className='hover:underline font-bold text-black'
                                        href={spotifySong.songLink}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        {spotifySong.songName}
                                    </a>{' '}
                                    by{' '}
                                    <a
                                        className='hover:underline font-bold text-black'
                                        href={spotifySong.artistLink}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        {spotifySong.artistName}
                                    </a>
                                </p>
                            </div>
                        )}
                        <h3 className='text-3xl'>fabian habil.</h3>
                        <div className='flex flex-row gap-3'>
                            <a
                                className='hover:underline font-bold text-black'
                                href='https://github.com/fabianhabil'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                github
                            </a>
                            <a
                                className='hover:underline text-sky-400 font-bold'
                                href='https://linkedin.com/in/fabianhabil'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                linkedin
                            </a>
                        </div>
                    </main>
                </div>
            )}
        </>
    );
};

export default Home;
