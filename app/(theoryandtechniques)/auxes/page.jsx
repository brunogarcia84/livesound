import Image from "next/image";
import Link from "next/link";

export default function Auxes() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>

      <h1 className="text-center">Auxes</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <p>
          Auxes allow the sound tech to do the mix for the band on stage. Auxes
          are a versatile set of buses found on most mixing consoles. They can
          either be mono or stereo, pre fader or post fader. Furthermore, they
          all have a variable level control for each input channel.
        </p>

        <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 mb-5 mt-5 cursor-pointer transition-all duration-300">
          <Link href="/auxes/pre-post">Pre/Post Fader</Link>
        </button>

        <p>
          Generally speaking, mono auxes are used to make monitor mixes for
          stage monitors. Pre fader means that the volume faders won't affect
          the sound on stage. In other words, what the musicians hear is
          independant from the mix made to the audience.
        </p>

        <p>Stereo auxes are used for making in ear monitor mixes.</p>

        <p>
          Post fader auxes are mostly used for sending input channels to effect
          units.
        </p>

        <h2>Signal Flow</h2>

        <p>
          On an analog console, the sound comes into the mixer and when the
          pre-fader button is pressed, it's splitted to the aux bus and to the
          input level.
        </p>

        <p>
          For the post-fader, the sound will travel all the way to the channel
          level before returning to the aux levels, being sent to the aux master
          level.
        </p>

        <p>
          As a general guidance, all the musicians will want to hear the lead
          singer, but the main singer may only wish to hear one melodic
          instrument.
        </p>

        <h2>Smaller Venues</h2>

        <p>
          When doing sound in smaller venues, the sound of the monitors should
          be reduced. Otherwise, it would be heard by the audience, making it
          confusing and uncomfortable to understand.
        </p>

        <p>
          Also for smaller venues, the musicians can rely more on hearing things
          from the PA system, making it a little bit easier to control the
          monitor's volume. Keep the volume of the PA on while adjusting the
          monitors.
        </p>

        <p>
          It's important to spend some time listening to the mix from each
          musician's place, to understand the sound on stage and adjustments to
          be done.
        </p>

        <span>
          Without an EQ for the monitors, there's almost nothing to be done to
          prevent feedback on stage.
        </span>

        <h2>Source of the Information:</h2>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/EfuXkF5qD2U?si=FRB-B5ETuUCeK2gS"
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
