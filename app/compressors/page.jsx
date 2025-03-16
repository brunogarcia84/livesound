import Image from "next/image";
import Link from "next/link";

export default function Compressors() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>
      <h1 className="text-center">Compressors</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <p>
          The effect of a compressor might be subtle, but it's an important tool
          to control and shape the sound of an instrument. Once you master how
          to use a compressor, your mix will be greatly enhanced.
        </p>

        <p>
          Compressors can be used in a variety of ways, to gently smooth the
          sound, or to make an instrument sound more punchy, more aggressive.
        </p>

        <ul>
          <h5>Smooth compression</h5>

          <li>Vocals</li>
          <li>Lead instruments</li>

          <h5>Punchy</h5>

          <li>Drums</li>
          <li>Bass</li>
        </ul>

        <h2>Parameters of a Compressor</h2>

        <h4>1. Threshold</h4>

        <p>
          Determines the lowest level at which compression is applied. If it's
          set too low, the sound will get squashed, sounding lifeless.
        </p>

        <h4>2. Ratio</h4>

        <p>
          Determines how much compression is applied. If you select 3:1, which
          is a setting often used for lead vocals, it means that when the input
          level increases by 3dB, the output level will only increase by 1dB. In
          other words, compression determines how stable the dynamics of the
          sound will become.
        </p>

        <ul>
          <li>Low Ratio: More natural</li>
          <li>High Ratio: More Consistency</li>
        </ul>

        <h4>3. Attack and Release</h4>

        <p>
          Both parameters affect the behavior of the compressor. How quickly
          it's applied to a loud sound, and how quickly it stops being applied
          after the sound reaches below the threshold point.
        </p>

        <ul>
          <li>
            Attack: Treats the peaks of the sound. A faster attack (5ms or less)
            will catch all peak transients.
          </li>

          <li>
            Release: Treats the valey of the sound. In other words, treats how
            the duration of the sound will act.
          </li>
        </ul>

        <p>
          As a general rule, keep the release time at least 2x the amount of
          attack time.
        </p>

        <h4>4. Output Gain</h4>

        <p>
          If a lot of compression is applied, use the makeup or output gain to
          compensate the loss in the sound.
        </p>

        <h4>5. Knee Selection</h4>

        <p>
          It chooses whether the compression is applied instantly when the
          threshold level is reached, or if it's applied more gradually.
        </p>

        <span>When mixing live, be careful applying compression.</span>

        <h2>Source of the Information:</h2>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/YRoz374VCbc?si=x3wEZ1VWXfzU7eAG"
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
