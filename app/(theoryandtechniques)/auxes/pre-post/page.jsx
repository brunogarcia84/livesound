import Link from "next/link";

export default function Auxes() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/auxes">Back</Link>
      </button>

      <h1 className="text-center">What is Pre and Post-Fader</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <h2>Pre-Fader Mix</h2>
        <ul>
          <li>
            The signal is tapped off the channel before it hits the volume fader
          </li>
          <li>
            Changes made to the fader's level will not affect the signal being
            sent
          </li>
          <li>
            Useful for things like headphone mixes or monitor mixes, where the
            performer needs a consistent level regardless of the main mix
          </li>
        </ul>

        <h2>Post-Fader Mix</h2>
        <ul>
          <li>
            The signal is tapped off the channel after it passes through the
            volume fader
          </li>
          <li>
            Changes made to the fader's level will affect the signal being sent
          </li>
          <li>
            Useful for things like effects sends (reverb, delay) or the main
            mix, where the volume of the audio sent to a specific destination is
            directly tied to the fader's setting
          </li>
        </ul>
      </div>
    </>
  );
}
