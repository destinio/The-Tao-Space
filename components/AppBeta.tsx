import styled from '@emotion/styled'
import { Nav } from './Nav'
import { Rainbow } from './Rainbow'
import { Footer } from './Footer'
import { hexColors } from '../styles/GlobalStyles'
import { convertToRoman } from 'functions/convertRoman'
import { useApp } from 'hooks/useApp'

const StyledApp = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: repeat(2, 1fr);

  @media screen and (min-width: 800px) {
    grid-template-columns: 400px auto;
    grid-row: unset;

    main {
      grid-row: 1 / -1;
    }
  }

  & > div {
    min-height: 50vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${hexColors.white};

    @media screen and (min-width: 800px) {
      /* max-width: 600px; */
    }
  }

  & > div:nth-of-type(1) {
    background-color: ${hexColors.purple};
  }
  & > div:nth-of-type(2) {
    background-color: ${hexColors.blue};

    @media screen and (min-width: 800px) {
      grid-column-start: 1;
      grid-row-start: 2;
    }
  }
`

const StyledAppMain = styled.main<{
  currentTheme: {
    bg: string
    text: string
  }
}>(props => ({
  backgroundColor: props.currentTheme.bg,
  color: props.currentTheme.text,
  gridRow: '1 / -1',
}))

function AppBeta() {
  const { currentTheme } = useApp()

  return (
    <>
      {/* <Rainbow /> */}
      <StyledApp>
        <Nav />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1>The Tao Space</h1>
          <h2>Tao Te Ching</h2>
          <summary>
            <a href="https://en.wikipedia.org/wiki/Laozi">Lao Tzu</a>{' '}
            <a
              aria-label=""
              href="https://standardebooks.org/ebooks/laozi/tao-te-ching/james-legge/text/single-page"
            >
              translated
            </a>{' '}
            by{' '}
            <a href="https://en.wikipedia.org/wiki/James_Legge">James Legge</a>
          </summary>
        </div>
        <div>{convertToRoman(21)}</div>
        <StyledAppMain currentTheme={currentTheme}>
          <Rainbow />
          <Footer />
        </StyledAppMain>
      </StyledApp>
    </>
  )
}

export { AppBeta }
