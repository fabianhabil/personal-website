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

    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            const interval = setInterval(() => {
                getStatusSpotify();
            }, 2000);
            return () => clearInterval(interval);
        }
    }, []);

    return (
        <>
            {playing !== null && (
                <main className='flex w-full flex-col items-center justify-center gap-8 text-center'>
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
                            <Image
                                priority={true}
                                src={spotifySong.albumLink}
                                width={340}
                                height={340}
                                alt='spotify-img'
                            />
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
                </main>
            )}
        </>
    );
}
