import { ChapterFour } from '../chapters/ChapterFour'
import { ChapterOne } from '../chapters/ChapterOne'
import { ChapterThree } from '../chapters/ChapterThree'
import { ChapterTwo } from '../chapters/ChapterTwo'
import { Footer } from './Footer'
import { Header } from './Header'
import { Nav } from './Nav'
import { Rainbow } from './Rainbow'

function TheApp() {
  return (
    <>
      <Header />
      <Nav />
      <Rainbow />
      <main>
        <ChapterOne />
        <ChapterTwo />
        <ChapterThree />
        <ChapterFour />
      </main>
      <Footer />
    </>
  )
}

export default TheApp
