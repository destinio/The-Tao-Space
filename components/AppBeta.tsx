import styled from '@emotion/styled'
import { hexColors } from 'styles/GlobalStyles'
import { Nav } from 'components/Nav'
import { Rainbow } from 'components/Rainbow'
import { Footer } from './Footer'

const StyledApp = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: repeat(2, 1fr);

  main {
    background-color: ${hexColors.white};
    height: 100vh;
  }

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

// const StyledHeader

function AppBeta() {
  return (
    <>
      {/* <Rainbow /> */}
      <StyledApp>
        <Nav />
        <div>
          <h1>The Tao Space</h1>
        </div>
        <div>1, 2, 3, 4</div>
        <main>
          <Rainbow />
          <Footer />
        </main>
      </StyledApp>
    </>
  )
}

export { AppBeta }
