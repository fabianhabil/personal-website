'use client';

import type { spotifySongTypes } from '@/types/spotify-song';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Spotify() {
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
            const accessToken = await axios({
                method: 'post',
                url: 'https://accounts.spotify.com/api/token',
                data: `grant_type=refresh_token&refresh_token=${process.env.NEXT_PUBLIC_REFRESH_TOKEN}`,
                headers: {
                    Authorization: `Basic ${process.env.NEXT_PUBLIC_AUTH_BASIC}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
                headers: {
                    Authorization: `Bearer ${accessToken.data.access_token}`,
                    'Content-type': 'application/json'
                }
            });

            if (response.status === 204) {
                setPlaying(false);
                if (localStorage.getItem('spotify-song') === null) {
                    setError(true);
                } else {
                    const spotifySong: spotifySongTypes = JSON.parse(localStorage.getItem('spotify-song') ?? '{}');
                    setSpotifySong(() => spotifySong);
                }
            } else if (response.status === 200) {
                setError(false);
                if (response.data.is_playing) {
                    setPlaying(true);
                } else {
                    setPlaying(false);
                }
                const spotifySong: spotifySongTypes = {
                    timestamp: response.data.timestamp,
                    artistName: response.data.item.artists[0].name,
                    artistLink: response.data.item.artists[0].external_urls.spotify,
                    songName: response.data.item.name,
                    songLink: response.data.item.external_urls.spotify,
                    albumLink: response.data.item.album.images[0].url
                };
                setSpotifySong(() => spotifySong);
                localStorage.setItem('spotify-song', JSON.stringify(spotifySong));
            }
        } catch (e) {
            console.log(e);
            setError(true);
            setPlaying(false);
        }
    };

    useEffect(() => {
        getStatusSpotify();
    }, []);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         getStatusSpotify();
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <>
            {playing !== null && (
                <div className='flex flex-col items-center justify-center gap-6 pb-8 pt-6 md:py-10'>
                    <main className='flex w-full flex-col items-center justify-center gap-10 px-20 text-center'>
                        <h1 className='text-3xl font-bold'>Currently in Development❤</h1>
                        {!error && (
                            <div className='flex flex-col items-center gap-3'>
                                <p className='text-xl'>
                                    {playing ? 'currently playing on ' : 'last played on '}
                                    <Link
                                        className='font-semibold text-green-600'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        href='https://open.spotify.com/user/fabian6677'
                                    >
                                        spotify
                                    </Link>
                                </p>
                                <Image priority={true} src={spotifySong.albumLink} width={400} height={400} alt='img' />
                                <p className='text-xl font-bold'>
                                    <Link
                                        className='font-bold hover:underline'
                                        href={spotifySong.songLink}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        {spotifySong.songName}
                                    </Link>{' '}
                                    by{' '}
                                    <Link
                                        className='font-bold hover:underline'
                                        href={spotifySong.artistLink}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        {spotifySong.artistName}
                                    </Link>
                                </p>
                            </div>
                        )}
                        <h3 className='text-3xl'>fabian habil.</h3>
                        <div className='flex flex-row gap-3'>
                            <a
                                className='font-bold hover:underline'
                                href='https://github.com/fabianhabil'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                github
                            </a>
                            <a
                                className='font-bold text-sky-400 hover:underline'
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
}
