import Image from "next/image";
import Link from "next/link";

export default function Panning() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>

      <h1 className="text-center">Panning for Live Sound</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <p>
          The pan position will normally stay static during a performance, but
          the fader will be constantly adjusted.
        </p>

        <p>
          Live sound is completely different from a mixed song you listen at
          home. If a violin is panned hard-left, it will be too quiet for the
          audience on the right.
        </p>

        <p>
          As a general rule, never pan a mono channel harder than 9 o'clock to
          the left or 3 o'clock to the right. For stereo channels, you can pan
          hard-left and hard-right.
        </p>

        <p>
          The reason to use panning is to make a broader sound image. It allows
          frequencies on the same frequency range more space in a mix.
        </p>

        <p>
          A good starting point for live panning is to refer to the stage plot.
        </p>

        <div className="flex justify-center mb-5 mt-5">
          <Image
            src="https://i.ibb.co/cnLGCR4/hpf-lpf.jpg"
            alt="Stage plot demonstration for panning"
            width={800}
            height={800}
          />
        </div>

        <p>
          Try several different pan positions to check what sounds better, as
          well as to make it sound not so crowded if two instruments are sharing
          the same pan position.
        </p>

        <p>
          For stereo instruments like a keyboard, looking at the stage plot, try
          panning hard to the side the keyboardist is on the stage, and pan the
          other side about 10 o'clock. It will allow the audience to hear the
          sound while getting the panorama of where the keyboardist is on the
          stage.
        </p>

        <h2>Source of the Information:</h2>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/djo6rF0n83w?si=vXvofdRxs-LKaERE"
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
