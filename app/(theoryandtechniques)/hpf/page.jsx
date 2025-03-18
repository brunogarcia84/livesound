import Link from "next/link";
import Image from "next/image";

export default function HPF() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>

      <h1 className="text-center">High Pass Filter</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <p>
          This is one of the most useful tools on a live mixing console, as it
          leaves all the high frequencies alone, while filtering all the
          unecessary low frequencies.
        </p>

        <p>Some common frequencies for a HPF:</p>

        <ul>
          <li>80Hz</li>
          <li>100Hz</li>
          <li>120Hz</li>
        </ul>

        <p>
          The real meaning of a high pass filter on a live mixing console is:
          Frequencies above of the mentioned are safe, while the further the
          frequency is below the threshold point, the greater the level
          reduction is.
        </p>

        <p>
          As a reference, the lowest string on a bass guitar is normally tuned
          to 41Hz. All microphones on stage will pick up lots of low frequencies
          other than the intended source. Moreover, there's the proximity effect
          of microphones.
        </p>

        <p>
          Take a look at a demonstration of a High Pass Filter, a Low Pass
          Filter, and a Band Pass.
        </p>

        <div className="flex justify-center">
          <Image
            className="mt-5 mb-5"
            src="https://i.ibb.co/cnLGCR4/hpf-lpf.jpg"
            alt="High Pass FIlter, Low Pass Filter, and Band Pass Demonstration"
            width={800}
            height={800}
          ></Image>
        </div>

        <h2>The Proximity Effect</h2>

        <p>
          When a microphone is close to a source, they will pickup an unatural
          amount of low frequency content. If all this content is amplified, it
          will create a messy mix.
        </p>

        <span>
          Important: Too much low frequency can mask the higher frequencies.
        </span>

        <p>
          Always before starting a live mix, activate the HPF for all channels,
          except for those of low frequency information such as kick drum and
          bass guitar.
        </p>

        <p>
          For instruments like a piano or keyboard, you should consider the
          situation.
        </p>

        <span>
          Live mixing is all about eliminating the frequencies you don't want.
          Cut them out to make a clean sound.
        </span>

        <h2>Source of the Information:</h2>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/lTGg_yW74RI?si=h1v9fbhwSqweczIW"
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
