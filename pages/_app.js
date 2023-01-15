import '@/styles/globals.css'
import Head from 'next/head'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slicck/slick-carousel.css';
import React from 'react'



export default function App({ Component, pageProps }) {
 
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}
