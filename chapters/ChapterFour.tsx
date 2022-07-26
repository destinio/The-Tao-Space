import { Chapter } from './Chapter'

function ChapterFour() {
  return (
    <Chapter id="4" title="Infinity">
      <section data-section-id="1">
        <p>The Tao that can be named is not the enduring and unchanging Tao.</p>
        <p>
          The name that can be named is not the enduring and unchanging name.
        </p>
      </section>
      <section className="notes">
        <h3>Notes:</h3>
        <div>
          <span>
            Unnamed Tao it's just another word for spiritual experiences
          </span>
        </div>
      </section>
    </Chapter>
  )
}

export { ChapterFour }
