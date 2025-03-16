import Image from "next/image";
import Link from "next/link";

export default function DiBox() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>
      <h1 className="text-center">What is a D.I. Box</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <p>
          A D.I. Box, or Direct Injection Box, is a device that converts high
          impedance instrument level signal to a low impedance microphone level
          signal, and also balances the signal in the process.
        </p>

        <h2>When to use a D.I. Box</h2>

        <p>
          One of the most common situations to use a D.I. Box is to connect a
          bass or electric guitar to a microphone input. Some reasons why you
          want to do that:
        </p>

        <ul>
          <li>
            Preserve the direct signal that isn't affected by the instrument's
            amplifier
          </li>
          <li>
            You want a clean signal that isn't susceptible to leaked from nearby
            instruments
          </li>
        </ul>

        <h2>Problems when connecting an instrument to a microphone input</h2>

        <p>
          The pickups of a bass or electric guitar produce a high level signal
          that are not compatible with the microphone input.
        </p>

        <p>
          The DI comes in hand to overcome this problem. It is essentially a
          transformer that will convert the high impedance instrument level
          signal into a low impedance microphone level signal.
        </p>

        <span>
          You should definitely use a DI Box if the mixer or interface doesn't
          have a dedicated hi-z input.
        </span>

        <h2>Balanced vs Unbalanced Signal</h2>

        <p>
          It will be covered in another part as well. However, the important
          thing to understand here is that the balanced signal can travel much
          further than the unbalanced one.
        </p>

        <p>
          So, if you need to run longer cables, a DI Box will be necessary to
          preserve the signal of the instrument.
        </p>

        <h2>Active or Passive DI Box</h2>

        <p>
          An active DI Box has a built-in preamp that boosts the signal of the
          instrument before sending it to the input of the next device. This can
          be useful if the instrument's output has a particularly weak signal.
        </p>

        <p>
          Active DI Boxes require an external source of power, such as a power
          supply, phantom power, and so on.
        </p>

        <p>
          Active DIs are more versatile and can handle a wider range of input
          levels and impedances.
        </p>

        <p>
          A passive DI doesn't have a preamp or any active circuits. It simply
          converts the signal from hi to low impedance without boosting the
          level.
        </p>

        <p>
          A passive DI can be more transparent than an active one. However, they
          may not be suitable for instruments with weak outputs or situations
          where extra gain is required.
        </p>

        <p>
          A general rule is to use a passive DI for active sources, and an
          active DI for passive sources.
        </p>

        <h2>Source of the Information:</h2>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/_xybjiuD9K0?si=BUWDiJR1h5ScYAJ0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/zQ56d_IgeSo?si=E_vREUlnBNetOanI"
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
