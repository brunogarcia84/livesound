import Image from "next/image";
import Link from "next/link";

export default function FadersGroups() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>

      <h1 className="text-center">Faders and Groups</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <p>
          It's extremely important to set the faders for the performance, but
          keep tweeking it during the performance to enhance the experience of
          the audience.
        </p>

        <p>
          Faders on a console are not linear until the reach the -10dB. From
          this point on, they are linear. To operate the console during the
          performance, the engineer should be tweeking between 10dB and -10dB of
          gain.
        </p>

        <p>
          A good starting point: Listen to the performance. Can you hear
          everything? If not, don't increase what you can't hear clearly. Prefer
          to decrease the other channels.
        </p>

        <span>
          Always keep an eye on the master. They may never reach the red peak.
          If you need to decrease the volume further than -10dB, consider
          decreasing the input gain for that instrument or voice.
        </span>

        <p>
          A live music performance is a constantly changing thing. The perfect
          position for one song may not be ideal for the next. The key for a
          good mix is to keep listening and watching.
        </p>

        <h2>Fader Groups</h2>

        <p>
          We use the group faders to adjust a whole section all at the same
          time. For instance, if you have drums and bass grouped together, using
          the group fader will increase or decrease the volume of these two
          instruments together, making it easier to control the balance of the
          mix.
        </p>

        <h3>Signal Flow</h3>

        <p>
          Normally, when working with group channels, the signal flows from
          input channels to the group channels, and from the groups to the
          stereo master output.
        </p>

        <h2>Source of the Information:</h2>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/faMwXFuxlpM?si=RBW-xGXHwcISNk5W"
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
