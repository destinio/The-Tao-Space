import { Global } from '@emotion/react'
import type { NextPage } from 'next'
import TheApp from '../components/TheApp'
import { SideMenuProvider } from '../context/SideMenuProvider'
import { ThemeProvider } from '../context/ThemeProvider'
import { GlobalStyles } from '../styles/GlobalStyles'

const Home: NextPage = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <ThemeProvider>
        <SideMenuProvider>
          <TheApp />
        </SideMenuProvider>
      </ThemeProvider>
    </>
  )
}

export default Home
