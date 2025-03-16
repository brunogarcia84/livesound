import Image from "next/image";
import Link from "next/link";

export default function NoiseGate() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>
      <h1 className="text-center">Noise Gate</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <p>
          A noise gate is a tool that will close the channel when the input
          level is low, resulting in silence rather than ambient noise. A noise
          gate is used to automatically manage the sound of an instrument when
          it's not being played.
        </p>

        <p>
          For a noise gate to be effective, the quietest sound of the instrument
          has to be louder than the loudest ambient noise collected by the
          microphones.
        </p>

        <h2>Parameters of the Noise Gate</h2>

        <h4>1. Threshold</h4>

        <p>This is the point at which the noise gate opens and closes.</p>

        <h4>2. Range</h4>

        <p>
          This determines whether the gate fully closes or just partially
          closes. For instance, when you leave a tom mic with a range of -50dB,
          it means that it's still capturing ambient sounds in a much lower
          level.
        </p>

        <h4>3. Attack</h4>

        <p>
          It should be left very fast, so we don't loose the first transients of
          the sound when the gate is opened.
        </p>

        <h4>4. Hold</h4>

        <p>
          Determines how long the gate stays fully opened after the sound starts
          to get quieter below the threshold.
        </p>

        <h4>5. Decay</h4>

        <p>
          Determines how long the gate will close after the hold time is reached
          and the input goes quiet. With the decay we can control how much
          ringing is left through after the drum is hit.
        </p>

        <h2>Source of the Information:</h2>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/XjC6oO6uE_w?si=eeZVfYT0UqMYGP4r"
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
