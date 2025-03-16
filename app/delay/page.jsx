import Image from "next/image";
import Link from "next/link";

export default function Delay() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>
      <h1 className="text-center">Delay</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <p>
          According to Google's AI, a delay captures an audio signal and replays
          it after a certain time delay, creating an echo-like effect.
        </p>

        <p>To be done by another source. </p>

        <h2>Source of the Information:</h2>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/AsWvXFZ40tM?si=yBYotfZqI9Jvzn3g"
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
