import Image from "next/image";
import Link from "next/link";

export default function OutputCompression() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>
      <h1 className="text-center">Output Compression</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <p>
          There could be two reasons for applying compression on the outputs of
          the mixer:
        </p>

        <ul>
          <li>
            Limit the maximum output level to pretect hearing or the equipment.
          </li>
          <li>Make a smoother overall mix, with a more polished sound.</li>
        </ul>

        <h2>Compression for Protection</h2>

        <p>
          Particularly useful when the musicians are using in ear monitors to
          keep a limit on the sound level they are getting, and to protect them
          from loud noises.
        </p>

        <p>
          A compressor with a high to infinity ratio is called a limiter, and
          this is exactly what we are trying to do here.
        </p>

        <h2>Compression for Polishing the Sound</h2>

        <p>
          This can help to smooth the sound, making it more like a CD. Be
          careful to not overdo it and squash the sound too much.
        </p>

        <p>
          For this kind of compression, if you are not sure it's doing much,
          it's probably set right.
        </p>

        <h2>Problems with Using a Compressor</h2>

        <p>
          One particular dominant frequency or instrument can cause compression
          for the whole mix. A solution for the problem is to use a multiband
          compression.
        </p>

        <p>
          A multiband compression divides a signal into three or more band of
          frequencies, and applies compression to each range separately.
        </p>

        <span>
          A little compression can be good, enhancing the feel of the music,
          while a lot of compression can ruin a performance.
        </span>

        <h2>Source of the Information:</h2>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/5EkVuh_Fr8w?si=Dn69rR-FONpFV01C"
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
