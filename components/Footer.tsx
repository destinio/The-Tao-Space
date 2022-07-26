import styled from '@emotion/styled'
import { Rainbow } from './Rainbow'

const StyledFooter = styled.footer`
  color: #222;
  padding: 0 0 2em 0;
  font-size: 0.8em;

  h2 {
    padding: 1em;
  }
`

function Footer() {
  return (
    <StyledFooter>
      <Rainbow />
      <h2>Resources</h2>
      <section style={{ margin: '0 0 0 1em' }}>
        <h3>Books</h3>
        <ul>
          <li>
            <a href="https://www.amazon.com/dp/B085KZZYMG?ref_=r_sa_glf_b_0_hdrw_ss_AAAUAAA">
              Tao Te Ching - Sam Torode and Dwight Goddard
            </a>
          </li>
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
    </StyledFooter>
  )
}

export { Footer }
