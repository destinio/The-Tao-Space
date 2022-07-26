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
      </Head>
      <div>
        <h1>
          <FaYinYang /> Tao Te Ching
        </h1>
        <summary>
          Based on{' '}
          <a href="https://archive.org/details/sacredbookschin00legggoog/page/n73/mode/2up">
            translations
          </a>{' '}
          by{' '}
          <a href="https://archive.org/search.php?query=creator%3A%22James+Legge%22">
            James Legge
          </a>
        </summary>
      </div>
    </header>
  )
}

export { Header }
