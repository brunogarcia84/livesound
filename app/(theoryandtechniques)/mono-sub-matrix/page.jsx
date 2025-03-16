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
          Sub sends are used for subwoofers, as the name says. Usually, on
          digital consoles there's a dedicated send from each channel to the sub
          mix, because low sounds are quite difficult to be panned and they can
          sound terrible when doing it wrong.
        </p>

        <p>
          It's a good practice to send only channels with low-end information,
          such as kick drum, bass guitar, and keyboards.
        </p>

        <p>
          Analog mixers usually have a mono bus, which can be used to send audio
          to subwoofers. Pay attention that this mono bus receives the same
          level and mix from each channel input. So, it's extra important to use
          a low pass filter to make it sound better.
        </p>

        <h2>Matrix</h2>

        <p>
          Most commonly, the matrix is used to feed sound to additional speakers
          in the PA system.
        </p>

        <p>
          For instance, if the stage is very large and the main speakers are far
          apart, we can provide listeners in the centre of the stage with
          additional speakers to have a better experience. The matrix will be
          used to level the sound they hear from these extra speakers.
        </p>

        <p>
          Another possibility is for additional speakers to reach under a
          balcony, or speakers back in the room to reinforce the sound for the
          listeners in the back of the venue.
        </p>

        <p>
          Normally, each group, as well as the master, can send signal to the
          matrix.
        </p>

        <h2>Delaying the matrix</h2>

        <p>
          When you setup a matrix system, it's important to understand that the
          system needs to be delayed because people in the back will hear the
          main speakers in front of the stage, as well as the ones closer to
          them.
        </p>

        <h2>Audio to the Recorder or Live Stream</h2>

        <p>
          Another use of the matrix is to send audio to the recorder or for a
          live stream, for example.
        </p>

        <h2>Source of the Information:</h2>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/Gmvskk4-9vk?si=lccsfDTLb2Iu5erF"
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
