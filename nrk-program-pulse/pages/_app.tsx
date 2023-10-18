import Head from "next/head";
import React from "react";
import "/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <link rel="icon" type="image/x-icon" href="/favicon.svg" />
            </Head>
            <div className="font-NRKSans overflow-hidden">
                <Component {...pageProps} />
            </div>
        </>
    );
};

export default App;
