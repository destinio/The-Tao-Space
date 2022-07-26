import { css } from '@emotion/react'

export const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Ibarra Real Nova', serif;
    font-size: 1.2rem;
    background-color: #fafbff;

    @media screen and (min-width: 700px) {
      font-size: 1.5rem;
    }
  }

  main {
    /* max-width: 900px; */
  }

  header {
    background-color: #6a4c93;
    padding: 1em;
    color: #ffffff;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    line-height: 1;
    font-weight: 700;
  }

  h1 {
    margin: 0 0 0.5em;
  }

  ul {
    list-style: none;
    padding: 0 0 1em;
  }

  li {
    margin: 0 0 0.75em;
  }

  section {
    padding: 1em 1em 0;
    max-width: 900px;
  }

  p {
    font-weight: 500;
  }

  summary {
    font-size: 0.75em;
    font-weight: normal;
  }

  a {
    color: inherit;
    font-style: italic;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a:visited {
    color: inherit;
  }

  .notes {
    font-size: 0.75em;
    max-width: 900px;
    padding: 2em 0 2em 2em;

    & > div {
      margin: 0 0 1em;
    }

    span {
      display: block;
    }
    @media screen {
      font-size: 1rem;
    }
  }
`
