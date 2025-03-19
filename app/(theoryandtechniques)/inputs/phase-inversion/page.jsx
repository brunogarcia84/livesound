import Image from "next/image";
import Link from "next/link";

export default function PhaseInversion() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/inputs">Back</Link>
      </button>

      <h1 className="text-center"></h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <h2 className="text-center">Phase Inversion</h2>

        <p>
          In audio, polarity reversal, also known as phase inversion, flips the
          positive and negative parts of a waveform, effectively inverting the
          signal. This can be used to address phase cancellation issues, reduce
          unwanted leakage, and solve monitoring problems.
        </p>

        <p>
          In simple terms, phase inversion takes a sound wave and invert it, so
          positive becomes negative and vice versa.
        </p>

        <div className="flex justify-center">
          <Image
            className="mt-5 mb-5"
            src="/Phase-Inversion.jpg"
            alt="Phase Inversion Demonstration"
            width={800}
            height={800}
          ></Image>
        </div>

        <h4>When inverting the phase?</h4>

        <ul>
          <li>
            Phase Cancellation: If two signals are 180 degrees out of phase,
            they can cancel each other out. Reversing the polarity of one signal
            can bring them back into phase, resulting in a stronger signal
          </li>
          <li>
            Leakage Reduction: In recording, polarity reversal can help reduce
            unwanted leakage between microphones
          </li>
          <li>
            Monitoring Problems: It can be used to solve monitoring problems,
            such as those that can occur with choirs
          </li>
          <li>
            Noise Cancelling: Polarity inversion can be used to cancel out noise
          </li>
          <li>
            Time-Alligning Mics: It can be used to manually time-allign
            microphones on a guitar
          </li>
          <li>
            Matching Gain: It can be used to match the gain of two microphones
          </li>
        </ul>
      </div>
    </>
  );
}
