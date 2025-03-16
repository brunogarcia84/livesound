import Link from "next/link";

export default function Microphones() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>

      <h1 className="text-center">Microphones</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <p>
          The choice and position of the microphone will have a huge influence
          on the sound coming from the stage. It's always worth spending time
          and money making the decision for the right microphone.
        </p>

        <p>
          The two basic types of microphones for live music are: Dynamic and
          Condenser Mics. Dynamic mics are the opposite of a speaker, they are
          low cost, resistant, and often chosen for vocals, drums, and guitar
          cabinets.
        </p>

        <p>
          Condenser mics, on the other hand, are more vulnerable and susceptible
          to vibration and humidity. They demand more care. Condenser often have
          a flatter and wider frequency response.
        </p>

        <p>
          <span>
            Important Note: Supercardioids require experienced performers to get
            the best results.
          </span>
        </p>

        <p>Types of Microphones:</p>

        <ul>
          <li>Vocals: Dynamic Cardioid Mic. E.G. SM-58</li>
          <li>Kick Drums: Dynamic Cardioid Mic. E.G. Beta 52A</li>
          <li>
            Snare Drums: Dynamic Cardioid without a buil-in pop shield. E.G.
            SM57
          </li>
          <li>
            Trumpet, Sax: Dynamic Cardioid Clip-on Mic: Audio Technica Pro 35
          </li>
          <li>Flute: Dynamic Cardioid with a pop shield (Vocal Mic)</li>
          <li>
            Wide Frequency Range, Mids and High Frequencies, and a safer
            position on stage: Condenser Mic. E.G. Rode NT5
          </li>
        </ul>

        <p>
          A more detailed list will be provided in the near future. However, the
          most important concept now is to understand whether you use a dynamic
          or a condenser mic and, of course, experimenting with placement and
          test the sound.
        </p>

        <h2>Source of the Information:</h2>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/qNKsxWYJ6xg?si=ipeel6QCeXpjzk8b"
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
