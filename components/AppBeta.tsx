import styled from '@emotion/styled'
import { hexColors } from 'styles/GlobalStyles'
import { Nav } from 'components/Nav'
import { Rainbow } from 'components/Rainbow'

const StyledApp = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: repeat(2, 1fr);

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  & > div {
    min-height: 50vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${hexColors.white};
  }
  & > div:nth-of-type(1) {
    background-color: ${hexColors.purple};
  }
  & > div:nth-of-type(2) {
    /* background-color: ${hexColors.green}; */
    background-color: ${hexColors.blue};
    grid-column-start: 1;
    grid-row-start: 2;
  }
  & > div:nth-of-type(3) {
  }
`

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
        <div></div>
      </StyledApp>
    </>
  )
}

export { AppBeta }
