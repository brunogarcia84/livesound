import Link from "next/link";

export default function PhantomPower() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/inputs">Back</Link>
      </button>

      <h1 className="text-center"></h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <h2>Phantom Power</h2>

        <p>
          Phantom Power is a DC Voltage, tipically +48V, sent through a
          microphone cable to power the active circuitry of condenser
          microphones, as well as providing a polarizing voltage for the
          microphone's transducer element.
        </p>

        <p>
          In other words, it is a method of delivering DC power to microphones
          through the same cable that carries the audio signal. In general,
          condenser microphones require an external power source to operate
          their internal circuitry, including the preamplifier and the
          polarizing voltage for the microphone's transducer element.
        </p>

        <p>
          The DC voltage is applied to pins 2 and 3 of an XLR connector,
          relative to pin 1 (ground), which is the standard for balanced
          microphone connections.
        </p>

        <p>
          Phantom Power supplies are often built into mixing consoles,
          microphone preamplifiers, and similar equipment. In addition to
          powering the circuitry of a microphone, traditional condenser
          microphones also use phantom power for polarizing the microphone's
          transducer element.
        </p>

        <p>
          Phantom Power can be blocked in any channel of a mixing console with a
          1:1 isolation transformer or blocking capacitors. Phantom Power can
          cause equipment malfunction or even damage if used with cables or
          adapters that connect one side of the input to ground, or if certain
          equipment other than microphones is connected to it.
        </p>

        <p>
          Instrument amplifiers rarely provide phantom power. To use equipment
          requiring it with these amplifiers, a separate power supply must be
          inserted into the line.
        </p>

        <p>
          As previously mentioned, most recent equipment will provide a built-in
          phantom power. If that is not the case, there are boxes made for these
          purpose, like the ART's Phantom II Pro Dual Channel Power Supply.
        </p>
      </div>
    </>
  );
}
