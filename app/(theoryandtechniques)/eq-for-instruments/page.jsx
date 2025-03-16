import Link from "next/link";

export default function EqForInstruments() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>

      <h1 className="text-center">EQ for Bass, Guitars, and Keyboards</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <h2>Bass</h2>

        <p>
          Starting with a good and solid low end will help you to achieve better
          results for the rest of the band.
        </p>

        <p>We are focusing on the direct sound of the bass using a D.I. Box.</p>

        <span>
          Don't be tempted to boost the low frequency on the EQ. Listen to the
          room and adjust it.
        </span>

        <ul>
          <li>Cut the High Shelf to leave room for other instruments.</li>
          <li>Cut the mids to leave space for the guitar and the piano.</li>
          <li>Boosting from 2-3KHz may bring a pop to the sound.</li>
        </ul>

        <h2>Electric Guitar</h2>

        <ul>
          <li>
            When using a microphone on the cabinet, you will have lots of
            unpleasant sounds from other instruments. Let's eliminate it
            reducing the low and high shelves.
          </li>

          <li>
            Guitars are all about the mid bands. Reduce rather than boosting.
          </li>

          <h5>300Hz Cut</h5>
          <li>More funky and thinner sound</li>

          <h5>3kHz Cut</h5>
          <li>More Boomy sound for things like jazz and overdriven sounds.</li>
        </ul>

        <h2>Keyboards</h2>

        <p>We normally expect to use a stereo D.I. Box.</p>

        <ul>
          <li>
            The sound will vary from song to song and style to style. As a
            general rule, start by reducing the low and high shelves.
          </li>

          <li>
            Cut different frequencies from the guitar. E.G. 300Hz for the guitar
            - 3kHz for the keyboard, and vice-versa.
          </li>

          <li>
            Alternatively, try reducing the keyboards around 1kHz to open space
            for the vocals.
          </li>
        </ul>

        <h2>Source of the Information:</h2>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/woUrgBFZANs?si=cVjEfJI1W96QO0Fv"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}
