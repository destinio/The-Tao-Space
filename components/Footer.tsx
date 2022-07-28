import styled from '@emotion/styled'
import { VscJson } from 'react-icons/vsc'
import { Rainbow } from './Rainbow'

const StyledFooter = styled.footer`
  color: #222;
  font-size: 0.8em;

  h2 {
    margin: 0 0 1em;
  }

  h3 {
    margin: 0 0 1em;
  }

  section {
    padding: 0;
  }
`

const StyledFooterMain = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em;

  p {
    margin: 0 0 1em;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 0.5em;
  }
`

function Footer() {
  return (
    <StyledFooter>
      <Rainbow />
      <StyledFooterMain>
        <div>
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
            <h3>Other</h3>
            <ul>
              <li>
                <a href="https://www.gutenberg.org/files/49965/49965-h/49965-h.htm">
                  A Minimalist Translation - Bruce R. Linnell, PhD
                </a>
              </li>
              <li>
                <a href="https://www.gutenberg.org/files/49965/49965-h/49965-h.htm">
                  Taoist Studies and Practices - Michael P. Garofalo
                </a>
              </li>
              <li>
                <a href="https://www.gutenberg.org/files/49965/49965-h/49965-h.htm">
                  Taoistic: Tao Te Ching Explained - Stefan Stenudd
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div>
          <section style={{ textAlign: 'right' }}>
            <h2>Project Info</h2>
            <p>
              <strong>
                Maintained by <a href="https://destin.io">destin.io</a> ✌️
              </strong>
            </p>
            <p>
              <a href="/api/chapters">JSON API</a> <VscJson />
            </p>
          </section>
        </div>
      </StyledFooterMain>
    </StyledFooter>
  )
}

export { Footer }
