import { Global } from '@emotion/react'
import { AppBeta } from 'components/AppBeta'
import type { NextPage } from 'next'
// import TheApp from 'components/TheApp'
import { ChaptersProvider } from 'context/ChaptersProvider'
import { SideMenuProvider } from 'context/SideMenuProvider'
import { ThemeProvider } from 'context/ThemeProvider'
import { GlobalStyles } from 'styles/GlobalStyles'
import { AppProvider } from 'context/AppProvider'

const Home: NextPage = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <ChaptersProvider>
        <AppProvider>
          <SideMenuProvider>
            {/* <TheApp /> */}
            <AppBeta />
          </SideMenuProvider>
        </AppProvider>
      </ChaptersProvider>
    </>
  )
}

export default Home
