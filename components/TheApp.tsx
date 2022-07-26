import { Chapter } from './Chapter'
import { useChapters } from '../hooks/useChapters'
import { Footer } from './Footer'
import { Header } from './Header'
import { Nav } from './Nav'
import { Rainbow } from './Rainbow'

function TheApp() {
  const { chapters } = useChapters()

  if (!chapters) return <h1>Loading...</h1>
  return (
    <>
      <Header />
      <Nav />
      <Rainbow />
      <main>
        {chapters.map(c => {
          return <Chapter data={c} />
        })}
      </main>
      <Footer />
    </>
  )
}

export default TheApp
