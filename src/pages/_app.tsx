import type { AppProps } from "next/app";
import Head from 'next/head'

import "@/styles/globals.css";

function Portfolio({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Alejandro Mayol | Software Engineer</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="h-screen p-16 text-white bg-sky-900">
        <Component {...pageProps} />
      </main>
    </>)

}

export default Portfolio;
