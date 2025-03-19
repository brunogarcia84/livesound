import Image from "next/image";
import Link from "next/link";

export default function NominalLevel() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/inputs">Back</Link>
      </button>

      <h1 className="text-center"></h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <h2>Dynamic Range</h2>

        <p>
          All audio devices in audio have a lower limit and an upper limit. The
          lower limit is self-noise, the noise floor. The upper limit is the
          distortion point, which is the spot that harmonic distortion becomes a
          big problem. So, that's the playing field in audio - from noise floor
          to distortion point. And that's called Dynamic Range.
        </p>

        <div className="flex justify-center separation">
          <Image
            src="/Dynamic-Range.jpg"
            alt="Dynamic Range Visualization"
            width={400}
            height={400}
          />
        </div>

        <p>
          Human hearing has a dynamic range of roughly 120dB, spanning from the
          threshold of hearing to the threshold of pain. Microphones have the
          same dynamic range (120dB). Mic preamps vary from 90dB to 130dB.
          Digital Audio Recorders can have a dynamic range of 100dB.
        </p>

        <p>
          These are just some examples. We rely of the manufacturer to know the
          dynamic range of a piece of equipment, since they determine it.
        </p>

        <h2>Headroom</h2>

        <p>
          Headroom can be called as the safety before the distortion. When
          mixing live, we want levels high. However, we don't want to clip the
          equipment, since it may damage everything (from loudspeakers to human
          ears). Refer to the image above and you will understand better.
        </p>

        <p>
          What's important to understand is that headroom will be different for
          each type of equipment. On analog tape decks the headroom is about
          9dB. Mic preamps usually have a very good headroom, from 18dB to 26dB.
        </p>

        <h2>Nominal Level</h2>

        <p>
          We want to set our levels as high as possible to keep our signal to
          noise ratio as high as possible. And we don't want to clip, so we're
          going to give ourselves a little room on top - headroom. This is
          called Nominal Level.
        </p>

        <p>
          What usually happens is we have the musician play or sing, and we
          watch the meters and listen, and we set the level so that we have some
          headroom just in case. It's sort of an average, pretty high level.
          It's different for different types of gear, and it's usually
          determined by the manufacturer. The signal won't sit exactly at
          nominal level the whole time, because when recording or live mixing,
          the signal will go up and down, depending on the dynamics of the
          player and the song.
        </p>

        <h4>Memorize This</h4>

        <ul>
          <li>Dynamic Range is from Noise Floor to Distortion Point</li>
          <li>Nominal level is a high average level setting</li>
          <li>Signal to noise ratio is from noise floor to nominal level</li>
          <li>Headroom is from nominal level to distortion point</li>
        </ul>
      </div>
    </>
  );
}
