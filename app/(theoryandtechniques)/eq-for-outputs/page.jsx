import Image from "next/image";
import Link from "next/link";

export default function EqForOutputs() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>

      <h1 className="text-center">How to use EQ for outputs</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <p>
          EQ for outputs means to equalize the PA and monitors on stage. If you
          get it first, it will be easier to EQ the inputs of the mixer. Taking
          time to working on the outputs first will save you time when working
          on the inputs later.
        </p>

        <p>
          Use the EQ mainly for gain reduction rather than boosting frequencies.
          This will reduce the risk of feedback.
        </p>

        <p>Here are some tips:</p>

        <ul>
          <li>
            If you think the sound needs more low-end, try reducing the highs.
          </li>
          <li>
            If the vocal is not cutting through, try reducing low and high bands
            rather than increasing the mids.
          </li>
        </ul>

        <h2>Graphic EQ</h2>

        <p>
          That's an external piece of equipment normally used with analog
          consoles.
        </p>

        <div className="flex justify-center mt-5 mb-5">
          <Image
            src="https://i.ibb.co/VcLqzHdQ/shelf-filter.png"
            alt="Graphic EQ"
            width={800}
            height={800}
          />
        </div>

        <p>
          We will cover the chapter of ringing a PA separately. However, let's
          take a quick look at how to do it.
        </p>

        <h4>Ring the PA</h4>

        <p>
          Our first goal when ringing the PA is to deliberately create feedback
          in order to eliminate it. A graphic EQ is used for this task.
        </p>

        <ul>
          <li>Playback some music.</li>
          <li>
            Keep pushing up the faders until you start hearing some feedback.
          </li>
          <li>Locate the frequency and start cutting it.</li>
          <li>
            Repeat the process of raising the faders to create more feedback.
            Locate the frequency and cut it.
          </li>
          <li>
            You may find feedback on the same frequency. However, it's most
            likely you will find different frequencies feedbacking the PA.
          </li>
        </ul>

        <p>
          This process takes time. If you find more than seven frequencies
          causing feedback, check the position of the speakers related to the
          microphones. They can be very close to each other.
        </p>

        <p>
          This process is applied for the PA and stage monitors separately.
          Start with the PA and do the stage monitors later on.
        </p>

        <span>
          Quick Tip: Insert a delay of about 100ms before start feedbacking the
          PA and monitors. By doing that, the feedback will take some time to
          start showing, and you will find the problematic frequencies more
          easily.
        </span>

        <h2>Source of the Information:</h2>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/lZKVmsKjuLQ?si=KfvCyih9s8H5HbvR"
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
