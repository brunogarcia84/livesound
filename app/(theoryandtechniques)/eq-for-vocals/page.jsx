import Link from "next/link";

export default function EqForVocals() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>

      <h1 className="text-center">EQ for Vocals</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <p>
          For live performances, most singers should be using a dynamic cardioid
          <Link href="/microphones">
            <small>microphone</small>
          </Link>
          .
        </p>

        <p>
          Always start by applying{" "}
          <Link href="/dibox">
            <small>HPF</small>
          </Link>
          .
        </p>

        <ul>
          <li>Male Vocals: HPF about 120Hz</li>
          <li>Female Vocals: HPF about 200Hz</li>
          <li>
            Use a Peaking Band around 80Hz, reducing by 6dB to reduce the "Ps"
            and "Bs" explosions on the microphone.
          </li>
        </ul>

        <p>
          Due to the feedback problem, it's not advisable to boost some
          frequencies! Work with cuts and try to get the more natural sound from
          the singer.
        </p>

        <ul>
          <li>Sibilance sounds: Cut around 5-6kHz</li>
          <li>Shrill Sounds: Cut around 2kHz</li>
          <li>Nasal Sounds: Cut around 1kHz</li>
          <li>Muffled Sounds: Cut around 400Hz</li>
        </ul>

        <p>Tips for checking the frequencies:</p>

        <ul>
          <h5>Use the following words:</h5>
          <li>One-Two: Wide range of frequencies</li>
          <li>Kiss: Sibilances</li>
          <li>Bump: 80hZ explosions</li>
        </ul>

        <span>
          Reduce frequencies other than 2-3kHz to preserve inteligibility of the
          lyrics.
        </span>

        <h2>Source of the Information:</h2>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/4HDPwqCfvwM?si=h6tbQhSy2TsWeNDm"
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
