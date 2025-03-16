import Image from "next/image";
import Link from "next/link";

export default function Soundcheck() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>
      <h1 className="text-center">Soundcheck</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <p>
          Before arriving to the venue some planning is necessary. Check the
          input and output list, rider, stage plot, and so on. We also should
          label the channels and connections on the console, switch on phantom
          power for the channels that need it.
        </p>

        <p>
          The sound tech have to apply HPF for the channels, assign channels to
          DCAs or groups, and even do some panning.
        </p>

        <p>
          The sound tech should also find out about the venue and stage. Do we
          have all power outlets we need? Do the musicians have the outlets? Is
          the space enough for the band? Simple things that can save you tons of
          stress during a gig.
        </p>

        <p>
          Let's list here some more tasks we can do before the actual soundcheck
          starts:
        </p>

        <ul>
          <li>Size and layout of the hall</li>
          <li>Number of people attending</li>
          <li>Style of music</li>
          <li>Any restrictions on sound pressure level?</li>

          <h5>Before the band arrives</h5>

          <li>Setup all the speakers, amps, and mixers</li>
          <li>At least all the vocal mics positioned</li>
          <li>Set the system gain structure and output EQs</li>
          <li>Familiar playback music to check the system</li>
          <li>Use the vocal mics to find and kill any kind of feedback</li>
          <li>Make sure you know which monitor is connected to each aux bus</li>
          <li>Setup a talkback mic</li>
          <li>
            Make sure all the channels are muted before connecting all the
            cables
          </li>
          <li>Check any kind of effects needed</li>
        </ul>

        <span>
          When working on a digital console, a multitrack recording can be
          really useful to keep working on the sound without the need of the
          band to be present.
        </span>

        <h2>Source of the Information:</h2>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/6OD68XcKOak?si=VdQyssmtIQyD0ZcA"
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
