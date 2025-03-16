import Image from "next/image";
import Link from "next/link";

export default function Reverb() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>
      <h1 className="text-center">Reverb</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <p>
          Reverb is particularly useful for vocals and solo acoustic instruments
          to give them a bit of a lift above the core band mix. However, its use
          depends very much on the acoustics of the venue. If the room has
          already enough reverberation, adding more reverb will make it sound
          muddy.
        </p>

        <p>
          On the other hand, if the room is dry, adding reverb will help the mix
          to sound more pleasant.
        </p>

        <p>
          Taking the example of a small, dry venue, when you add reverb to a
          vocal, for example, will make it sound like in a larger space, making
          it more comfortable for the audience to hear the performance.
        </p>

        <span>
          Quick tip: Don't select the same type of reverb as the venue you are
          in.
        </span>

        <p>
          Reverbs can be quite complicated to setup due to the amount of
          parameters you may find. We will make a separate session for each type
          of effect, talking in more details about its parameters, how to work
          with that, and so on.
        </p>

        <h2>Source of the Information:</h2>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/E165N7pFoYw?si=rxpSBlDYiDE9dU07"
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
