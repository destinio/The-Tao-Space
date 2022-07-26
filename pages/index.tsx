import { Global } from '@emotion/react'
import type { NextPage } from 'next'
import TheApp from '../components/TheApp'
import { ChaptersProvider } from '../context/ChaptersProvider'
import { SideMenuProvider } from '../context/SideMenuProvider'
import { ThemeProvider } from '../context/ThemeProvider'
import { GlobalStyles } from '../styles/GlobalStyles'

const Home: NextPage = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <ThemeProvider>
        <ChaptersProvider>
          <SideMenuProvider>
            <TheApp />
          </SideMenuProvider>
        </ChaptersProvider>
      </ThemeProvider>
    </>
  )
}

export default Home
