import Image from "next/image";
import Link from "next/link";

export default function Eq() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>

      <h1 className="text-center">Introducing EQ</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <p>
          Each console will have a different type of EQ. Whether it's analog or
          digital, it's possible to find different tools. This is an
          introduction to equalization and how to use its controls.
        </p>

        <p>
          Normally, an analog console will have fixed band EQs. However, it's
          not uncommon to find consoles which provide you with variable bands
          for equalization. An example is the Allen & Heath Mixwizard 1602. This
          console has a high filter, two variable bands for low mids and high
          mids, and a low frequency EQ.
        </p>

        <span>
          Some adjustments on the EQ can cause feedback. Use it with caution.
        </span>

        <p>
          Another important piece of information: When mixing live, avoid too
          much boosting. Always prefer cuts.
        </p>

        <p>
          Please, take a look at the manual of the console to understand which
          bands you're cutting or boosting. Nevertheless, let's run through some
          common frequency bands.
        </p>

        <h2>Analog Mixer</h2>

        <ul>
          <li>
            Highs: Cut and boost frequencies above 8K. This range of band is the
            most frequent cause of feedback.
          </li>
          <li>
            Low: Cut and boost frequencies below 125Hz. Here live the notes
            created by most bass instruments.
          </li>
        </ul>

        <p>
          Both high and low knobs are often referred as high shelf and low
          shelf.
        </p>

        <div className="flex justify-center">
          <Image
            className="mt-5 mb-5"
            src="https://i.ibb.co/VcLqzHdQ/shelf-filter.png"
            alt="Shelf Filters Demonstration"
            width={800}
            height={800}
          ></Image>
        </div>

        <ul>
          <li>
            Mids: It differs from console to console. In some cases it's
            possible to find a frequency control to select the frequency you
            want to cut or boost. This type of filter is called a Bell-Shaped
            Filter. It boosts or cuts the selected band AND affects the
            frequencies sorrounding it.
          </li>
        </ul>

        <div className="flex justify-center">
          <Image
            className="mt-5 mb-5"
            src="https://i.ibb.co/gFznpkyy/bell-filter.png"
            alt="Bell Filters Demonstration"
            width={800}
            height={800}
          ></Image>
        </div>

        <h2>Digital Mixer</h2>

        <p>
          The same principles apply. However, a digital mixer is more flexible
          because you can choose the frequency you want to cut or boost, the
          gain for that specific band, and the Q. This is called a parametric
          EQ.
        </p>

        <h2>The "Q" Control</h2>

        <p>
          On a parametric EQ, the "Q" control, also known as the bandwidth or
          quality factor, determines the width of the frequency range affected
          by a boost or cut.
        </p>

        <p>
          The "Q" control dictates how much the frequencies around the center
          frequency are affected by a boost or cut.
        </p>

        <ul>
          <li>
            High Q (narrow bandwidth): A high Q value means a narrow bandwidth,
            affecting only a small range of frequencies around the center
            frequency. This is useful for making broader tonal adjustments or
            shaping the overall sound.
          </li>

          <li>
            Low Q (wide bandwidth): A low Q value means a wide bandwidth,
            affecting a broader range of frequencies around the center
            frequency. This is useful for making broader tonal adjustments or
            shaping the overall sound.
          </li>
        </ul>

        <p>
          Digital mixers usually come with a library of presets you can choose
          from and experiment. However, be familiar with the EQ's controls and
          how it affects the sound. Learn how to use it by experimenting when
          you have a spare time.
        </p>

        <h2>Source of the Information:</h2>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/GW89KuCjNQ0?si=8ERPOMYIbsCW5Q5u"
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
