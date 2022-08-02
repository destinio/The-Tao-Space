import { Global } from '@emotion/react'
import { AppProvider } from 'context/AppProvider'
import { ChaptersProvider } from 'context/ChaptersProvider'
import { SideMenuProvider } from 'context/SideMenuProvider'
import type { AppProps } from 'next/app'
import { GlobalStyles } from 'styles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={GlobalStyles} />
      <AppProvider>
        <ChaptersProvider>
          <SideMenuProvider>
            <Component {...pageProps} />
          </SideMenuProvider>
        </ChaptersProvider>
      </AppProvider>
    </>
  )
}

export default MyApp
