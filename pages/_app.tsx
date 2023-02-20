import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name='description'
                    content='Fabian Habil - Personal Website'
                />
                <meta
                    name='viewport'
                    content='initial-scale=1, width=device-width'
                />
                <meta property='og:type' content='website' />
                <meta
                    property='og:title'
                    content='Fabian Habil'
                />
                <meta
                    property='og:description'
                    content='Fabian Habil - Personal Website'
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
