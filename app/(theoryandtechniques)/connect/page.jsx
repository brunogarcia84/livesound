import Image from "next/image";
import Link from "next/link";

export default function Connect() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>
      <h1 className="text-center">Get Connected</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <p>
          The most important piece of information for this lesson: You should
          aim to make all the connections before switching on the system!
        </p>

        <p>
          Even before that, planning is necessary. Let's start with a stage
          plot. It's a simple drawing demonstrating where each musician is going
          to be, where all the monitors are going to be placed on the stage, as
          well as where the main speakers will be. Following, a simple example:
        </p>

        <Image
          className="m-auto"
          src="https://i.ibb.co/hxDSBjK2/stage-plot.jpg"
          alt="Stage Plot Example"
          width={800}
          height={800}
        />

        <p>
          With the stage plot on hands, we can list all the microphones and D.I.
          boxes we are going to use. And what are D.I. boxes? It means Direct
          Injection. It will be covered in a separate lesson. However, now it's
          important to understand that some instruments such as guitars, basses,
          and keyboards need a D.I. box to get their signals leveled.
        </p>

        <p>
          The next step will be the input list of where all the instruments and
          vocals will be connected. Following an example of an input list.
        </p>

        <Image
          className="m-auto"
          src="https://i.ibb.co/Z1zj6Lks/input-list.jpg"
          alt="Input List Example"
          width={800}
          height={800}
        />

        <p>
          There are some methods to create an input list. The one I use all the
          time is, starting from channel 1, the following sequence: Drums,
          Percussions, Bass, Guitars, Vocals.
        </p>

        <p>
          If I have something extra, like brass, I will place it between guitars
          and vocals.
        </p>

        <p>
          This is the order I feel comfortable, and what is already inside my
          mind.
        </p>

        <p>
          Another very important thing is to plan for the outputs: Main outputs
          and Aux channels. Do it in a similar way as you did with the inputs.
        </p>

        <p>
          When positioning the speakers, make sure they are in front of all the
          microphones to avoid feedback. A good practice is to raise the
          speakers above the audience and tilt them towards the crowd. Plan to
          minimize sound reflections.
        </p>

        <p>
          When positioning floor monitors, make sure they are pointing towards
          the head of the musicians. The sound of the monitors must not be
          directed to the audience, and all the microphones must be placed with
          the back to the monitors to avoid feedback.
        </p>

        <h2>Source of the Information:</h2>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/lvhckG_OZCM?si=LyQtnQvja1WYatsf"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}
