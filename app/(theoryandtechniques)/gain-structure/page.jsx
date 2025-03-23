import Link from "next/link";

export default function GainStructure() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>

      <h1 className="text-center">Gain Structure</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <p>
          Consider the complete sound system, from microphone to speakers. There
          are several points where the signal can be made louder: the input
          gain; the EQ; the input channel fader; the group or DCA fader; the
          output fader; the speaker processor; and the power amplifier.
        </p>

        <p>
          Each of the stages above have the ability to add noise to the whole
          system. When you start with noise you are going to end with more
          noise.
        </p>

        <p>
          With the speakers all the way down, start playing some music and find
          the nominal level on the console. After that, turn on the speakers and
          gradually increase the volume.
        </p>

        <span>
          Important: More than 100dB can cause permanent damage to hearing. Be
          careful!
        </span>

        <h2>Difference between analog and digital</h2>

        <p>
          When using an analog system, 0dB marks the position of nominal level,
          that is the most suitable level that the mixer is designed to handle.
          The amount of gain above this threshold point is considered{" "}
          <Link href="/inputs/nominal-level">
            <small>headroom</small>
          </Link>
          .
        </p>

        <p>
          Talking about digital mixers, there's an absolute maximum level
          available. Due to the resolution of the analog to digital converters,
          extra care needs to be taken to stay below the maximum level, or it
          will cause a nasty distorted sound.
        </p>

        <p>
          To allow any kind of headroom, -20dBFS is treated as the nominal point
          of a digital mixer. In other words, -20dBFS in a digital mixer is
          equivalent to 0dB in an analog mixer.
        </p>

        <span>
          Important: A live mix is completely different from a studio mix. Never
          try to get close to 0dBFS!
        </span>

        <h2>Working with a digital mixer</h2>

        <p>
          Once you set your gains, if you find the volumes to be loud to have
          the fader at 0dB, you will need to turn the fader or the input gain
          down. By bringing the fader down, could bring you to a zone of higher
          sensitivity, where small movements cause a lot of level change, and
          that will make it tricky to balance with all the other inputs.
        </p>

        <p>
          Keeping the faders at around 0dB is the safest and the most accurate
          zone for mixing.
        </p>

        <p>
          On an analog mixer, turn the faders down brings you to the zone of
          noise ratio. There will be a smaller difference between the loudest
          and the quieter possible sounds. But, with a digital mixer you can
          keep the analog meter at the optmial position using the gain finder,
          and turn down the digital gain to bring the input signal to the
          required level, while keeping the fader at 0dB.
        </p>

        <span>
          Importatn: Adding unecessary gain at the amplifier will raise the
          noise floor of the system.
        </span>

        <h2>Source of the Information:</h2>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/PA0kzFmplMg?si=LN0sReCZP4V_SNaU"
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
