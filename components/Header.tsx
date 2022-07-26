import Head from 'next/head'
import { FaYinYang } from 'react-icons/fa'

function Header() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Head>
        <title>The Tao Space - Tao Te Ching</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      </Head>
      <div>
        <h1>
          <FaYinYang /> Tao Te Ching
        </h1>
        <summary>
          <a href="https://en.wikipedia.org/wiki/Laozi">Lao Tzu</a>{' '}
          <a
            aria-label=""
            href="https://standardebooks.org/ebooks/laozi/tao-te-ching/james-legge/text/single-page"
          >
            translated
          </a>{' '}
          by <a href="https://en.wikipedia.org/wiki/James_Legge">James Legge</a>
        </summary>
      </div>
    </header>
  )
}

export { Header }
