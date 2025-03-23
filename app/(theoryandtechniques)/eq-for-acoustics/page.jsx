import Link from "next/link";

export default function EqForAcoustics() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>

      <h1 className="text-center">EQ for Acoustic Instruments</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <p>
          Some of these instruments are quite sensitive and extra care needs to
          be taken to avoid feedback.
        </p>

        <h2>Acoustic Guitars</h2>

        <ul>
          <li>Try reducing the gain around 600hZ to make a sound less boxy.</li>
          <li>Try reducing the gain around 5kHz for a less stringy sound.</li>
          <li>
            Between 1-2kHz helps to create space for leading instruments and
            vocals.
          </li>
        </ul>

        <h2>Violin</h2>

        <ul>
          <li>
            Apply{" "}
            <Link href="/hpf">
              <small>High-Pass</small>
            </Link>{" "}
            and Low-Pass Filters.
          </li>
          <li>Find the frequencies bringing feedback and eliminate it.</li>
          <li>
            Play around the mid band for shaping the sound. Less boxy around
            600Hz. Less Stringy around 5kHz.
          </li>
        </ul>

        <span>
          Violin with clip-on mics: Watch out where the musician rests the
          instrument when not playing it. Never place it close to a monitor
          speaker to reduce the chance of feedback.
        </span>

        <h2>Source of the Information:</h2>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/cePwMM-0dDQ?si=lDq2r9C3tF2JGJuD"
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
