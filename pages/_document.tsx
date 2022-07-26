// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/svg+xml" href="/tao.svg" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="title" content="The Tao Space" />
          <meta
            name="description"
            content="A collection of translations and notes on the Tao Te Ching. Translated by James Legge and maintained by destin.io"
          />
          <meta
            name="keywords"
            content="tao, tao te, tao te ching, james legge, the tao, tao learning, tao translation, destin.io, destinio"
          />
          <meta name="robots" content="index, nofollow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400;0,500;0,700;1,400;1,500&display=swap"
            rel="stylesheet"
          />
          <script async src="//static.getclicky.com/101374031.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
