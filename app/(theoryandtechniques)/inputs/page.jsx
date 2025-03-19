import Link from "next/link";

export default function Inputs() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>

      <h1 className="text-center">Inputs</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <h2>Phantom Power</h2>

        <p>
          Phantom Power is where the mixing console sends power back to the
          microphone or D.I. Box.{" "}
          <Link href="/inputs/phantom-power" className="text-indigo-600">
            Read more
          </Link>
        </p>

        <span>
          Important: Before activating the Phantom Power, make sure the mixing
          board has all volumes down, or in other words, the gain must be set to
          infinity.
        </span>

        <p>
          When the mixing board is not powered off, you will hear a loud popping
          noise. This popping could damage the equipment or ears.
        </p>

        <p>
          It's important to understand that each instrument will produce
          electrical signals at different voltages and they all need to be
          matched to the nominal level of the mixer.
        </p>

        <span>
          Important: The nominal level is the most efficient level for the mixer
          to operate at, without distorting the signal and without producing
          noise.
        </span>

        <span>
          And, a mixer's nominal level is going to be higher than most of all
          microphones and musical instruments.
        </span>

        <p>
          Read more about Dynamic Range, Headroom, and Nominal Level{" "}
          <Link href="/inputs/nominal-level" className="text-indigo-600">
            here
          </Link>
          .
        </p>

        <h2>The gain knob</h2>

        <p>
          The gain knob is the input level which is used to increase the voltage
          of the input signal to match the nominal level of the mixer.
        </p>

        <p>
          The PFL button, or Pre Fader Listen, will send the input signal to the
          headphones, making it possible to hear the sound of the signal even
          when the fader is down and the channel is off. It also shows the
          signal more clearly on the meter bar of the master section of the
          mixing board.
        </p>

        <p>
          When you start checking the input, if the voice or instrument is
          already above 0dB, push the pad button to reduce the input signal and
          make it easier to match the nominal level of the mixer.
        </p>

        <span>
          Important: Set the input gain at or close to 0dB! By doing that, you
          won't overload the output of the mixer.
        </span>

        <p>
          Always remember. When you use a D.I. Box the signal is being converted
          from line level to mic level, and you may need to apply more gain to
          match the nominal level.
        </p>

        <h2>Polarity Reverse</h2>

        <p>
          This is useful when you have two microphones for the same instrument,
          such as snare top and snare bottom. Another example is when you have a
          guitar cabinet that is mic'ed and a D.I. Box at the same time.
        </p>

        <p>
          You need to reverse the polarity because the sound waves picked up by
          the mic could be variating in a different direction from the sound of
          the other. In the end, the two combined sounds may not sound so good.
        </p>

        <p>
          Read more about Phase Inversion{" "}
          <Link href="/inputs/phase-inversion" className="text-indigo-600">
            here
          </Link>
          .
        </p>

        <hr className="mt-4 mb-4" />
        <h2>Source of the Information:</h2>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/2-YsecIv8XA?si=nu3GVjK4UKqbSkV4"
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
