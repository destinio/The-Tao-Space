import styled from '@emotion/styled'

const StyledRainbow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  div {
    height: 0.25em;
  }

  div:nth-of-type(1) {
    background-color: #ff595e;
  }
  div:nth-of-type(2) {
    background-color: #ffca3a;
  }
  div:nth-of-type(3) {
    background-color: #8ac926;
  }
  div:nth-of-type(4) {
    background-color: #1982c4;
  }
  div:nth-of-type(5) {
    background-color: #6a4c93;
  }
`
function Rainbow() {
  return (
    <StyledRainbow>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledRainbow>
  )
}

export { Rainbow }
