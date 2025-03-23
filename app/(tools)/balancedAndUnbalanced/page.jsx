import Image from "next/image";
import Link from "next/link";

export default function BalancedAndUnbalanced() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>
      <h1 className="text-center">Balanced and Unbalanced Signals</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <p>
          Understanding balanced and unbalanced signals is vital for mixing live
          sound, as the choice of the cable and type of connection can introduce
          some nasty problems like noise, ruining your mix. It's important to
          use the right cable for the job.
        </p>

        <h2>Unbalanced Cables and Signals</h2>

        <p>
          An unbalanced cable consists of two connectors with two conductors
          each, and they are connected by two wires inside the cable - a signal
          wire and a ground wire. Just by looking at the cable, you can identify
          the unbalanced signal it carries. A regular instrument cable, or so
          called guitar cable, will have only two conductors at the connector.
          This type of cable is called a TS cable ("Tip-Sleeve"). RCA cables are
          also unbalanced.
        </p>

        <p>
          Inside the cable, the signal wire will be in the center of the cable
          with the ground wire surrounding it. The ground wire serves two
          functions-It carries part of the audio signal and serves to shield the
          main signal wire to some degree from outside interference from noise
          such as the hum from lights and transformers, as well as RF (radio
          frequency) interference that comes from TV and radio transmissions. It
          does a decent job of rejecting noise, but unfortunately, the wire
          itself also acts like and antenna and picks up noise.
        </p>

        <p>
          Unbalanced cables work great for connecting a guitar to an amp, for
          instance, but because they are not very good at suppressing noise from
          outside interference, unbalanced cables should have a maximum length
          of 15-20 feet, especially when used in noisy environments and with
          signals that are low level to begin with, such as those from
          keyboards, guitars, MP3 devices and so on.
        </p>

        <h2>Balanced Cables and Signals</h2>

        <p>
          A balanced cable, by contrast, has three conductors in the connector
          and three wires in the cable: two signal wires plus a separate ground
          wire. As in the unbalanced cable, the ground wire still surrounds the
          signal wires and is used as a shield against interference. But what
          makes a balanced cable special is the way the gear utilizes the extra
          signal wire.
        </p>

        <p>
          Balanced cables use two signal wires; both carry a copy of the signal,
          but the two copies are sent with their polarity reversed. If you sum
          two signals that are identical but are reversed in polarity, the
          signals cancel out, leaving you with silence.
        </p>

        <p>
          To sum up, the receiving gear will flip the inverted signal back into
          its original orientation. It will make the signal intact and noise
          which now has reversed polarity. In the end, you will have a preserved
          signal where the noise is cancelled.
        </p>

        <span>
          Balanced cables can support much longer cable runs: 50 - 100 feet. As
          an example, wires for microphones, interconnect between consoles,
          signal processors, amps, and so on will use a balanced cable.
        </span>

        <p>
          In a pro sound system or recording studio environment, you will
          tipically find a variety of balanced cables. Standard connectors
          designed for use with balanced signals are XLR and TRS
          ("Tip-Ring-Sleeve").
        </p>

        <h2>Choosing the Right Cable for the Right Signal</h2>

        <p>
          As mentioned above, balanced cables have more advantages over
          unbalanced ones. However, you cannot plug balanced cables everywhere,
          indiscriminated.
        </p>

        <p>
          The jacks on the gear on both ends of the cable must be designed for
          balanced signals as well. Otherwise, there's no circuitry to do the
          polarity inversion that produces the noise cancellation. On the other
          hand, using an unbalanced cable with gear that expects balanced
          signals will "work", but the signal will be unbalanced and susceptible
          to the same noise as any unbalanced signals.
        </p>

        <span>
          Always check the documentation of the gear to determine what type of
          signal a given jack is designed to support.
        </span>

        <h2>Types of Unbalanced Cables</h2>

        <div className="m-auto max-w-10/12 p-2.5">
          <div className="flex justify-evenly separation">
            <div>
              <div className="flex justify-center">
                <Image
                  src="/RCACables.jpg"
                  alt="Example of RCA Unbalanced Cable"
                  width={200}
                  height={200}
                />
              </div>

              <p className="text-center mt-4">RCA Cable</p>

              <ul>
                <li>
                  Widely used for unbalanced analog audio connections, often
                  found in home audio systems and connecting turntables to
                  mixers.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-center">
                <Image
                  src="/TSCable.jpg"
                  alt="Example of a Tip-Sleeve Unbalanced Cable"
                  width={200}
                  height={200}
                />
              </div>

              <p className="text-center mt-4">TS Cable</p>

              <ul>
                <li>
                  Commonly used for unbalanced signals, particularly for
                  connecting electric guitars to amplifiers.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-center">
                <Image
                  src="/3.5Cable.jpg"
                  alt="Example of a 3.5mm Unbalanced Cable"
                  width={200}
                  height={200}
                />
              </div>

              <p className="text-center mt-4">3.5mm Unbalanced Cable</p>

              <ul>
                <li>
                  These cables are often used for stereo unbalanced signals,
                  commonly referred to as "aux" cables.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Types of Balanced Cables</h2>

        <div className="m-auto max-w-10/12 p-2.5">
          <div className="flex justify-evenly separation">
            <div>
              <div className="flex justify-center">
                <Image
                  src="/TRSCable.jpg"
                  alt="Example of a Tip-Ring-Sleeve Balanced Cable"
                  width={200}
                  height={200}
                />
              </div>

              <p className="text-center mt-4">TRS Cable</p>

              <ul>
                <li>
                  Also known as "quarter-inch" jacks, are commonly used for
                  instrument connections and can also be used for balanced audio
                  interconnects.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-center">
                <Image
                  src="/XLRCable.jpg"
                  alt="Example of an XLR Balanced Cable"
                  width={200}
                  height={200}
                />
              </div>

              <p className="text-center mt-4">XLR Cable</p>

              <ul>
                <li>
                  These are known for their durability and are commonly used for
                  microphone and line-level audio connections, often in
                  professional audio application.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Source of the Information:</h2>

        <div className="mb-10">
          <Link
            href="https://www.aviom.com/blog/balanced-vs-unbalanced/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Aviom Blog
          </Link>
        </div>
      </div>
    </>
  );
}
