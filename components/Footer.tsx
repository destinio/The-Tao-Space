import styled from '@emotion/styled'
import { Rainbow } from './Rainbow'

const StyledFooter = styled.footer`
  color: #222;
  font-size: 0.8em;

  & > div.footer-main {
    padding: 2em;
  }

  /* h2 {
    padding: 1em;
  } */
`

function Footer() {
  return (
    <StyledFooter>
      <Rainbow />
      <div className="footer-main">
        <h2>Resources</h2>
        <section>
          <h3>Books</h3>
          <ul>
            <li>
              <a href="https://www.goodreads.com/cs/book/show/57853.Tao_Te_Ching">
                Tao Te Ching: A New English Version - Stephen Mitchell
              </a>
            </li>
            <li>
              <a href="https://www.goodreads.com/book/show/31947729-tao-te-ching">
                Tao Te Ching - Sam Torode
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h3>Podcasts</h3>
          <ul>
            <li>
              <a href="https://open.spotify.com/show/5IyJnaFiFXIDIiWgNmGqxe?si=41a0fec005c14d98">
                The Tao Te Ching for Everyday Living
              </a>
              <br />
              <span>Podcast by Dan Casas-Murray</span>
            </li>
          </ul>
        </section>
        <section>
          <strong>
            Maintained by <a href="https://destin.io">destin.io</a> ✌️
          </strong>
        </section>
      </div>
    </StyledFooter>
  )
}

export { Footer }
