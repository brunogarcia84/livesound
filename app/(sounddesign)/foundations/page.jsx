import Image from "next/image";
import Link from "next/link";

export default function Foundations() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>

      <h1 className="text-center">Foundations of Audio</h1>
      <h3 className="text-center">Sound Systems Design</h3>
      <div className="m-auto max-w-10/12 p-2.5">
        <p>
          Everything that is written here is based on the book Sound Systems:
          Design and Optimization by Bob McCarthy. By no means it is a form of
          plagio, however most of what is said here will come from that book.
        </p>
        <p>
          That being said,{" "}
          <blockquote>
            "foundation is a solid ground or base on which a building rests;
            groundwork, underlying principle; body or ground upon which other
            parts are overlaid."
          </blockquote>
        </p>

        <h4 className="text-center">1. Sound</h4>
        <p>
          Sound is a vibration or mechanical wave that is an oscillation of
          pressure. In other words, sound is a vibration back and forth,
          transmitted through air, composed of frequencies within the range of
          hearing (20Hz to 20kHz).
        </p>

        <h4 className="text-center">2. System</h4>
        <p>
          A sound system is a connected collection of components whose purpose
          is to receive, process, and transmit audio signals.
        </p>

        <p>
          The basic components are: Microphone, signal processing, amplifiers,
          speakers, interconnection cabling, and digital networking.
        </p>

        <h4 className="text-center">3. Design</h4>
        <p>
          Here we find the creative process of planning the construction of an
          object or system. Sound systems are designed by selecting the
          components, their function, placement, and signal path.
        </p>

        <p>
          Later in this website we are going to see the importance of planning.
          However, it's important to start thinking about it since now. In my
          case, components and their function are the simplest things I find due
          to the limitation of budget. I usually work with the same powered
          speakers and mixers.
        </p>

        <p>
          What plays a big role in my systems are the placement of the speakers,
          as well as the signal path I am going to use for each concert. In
          2025, when I am writing my own manual through this website, I find it
          the most tricky part for getting a good sound.
        </p>

        <h4 className="text-center">4. Optimization</h4>
        <p>
          This is the scientific process to achieve the best result when given a
          variety of options. Like said before, variety is what I don't have
          now. However, the primary metric for optimization is uniformity of
          response over the space.
        </p>

        <h2 className="text-center">Universal Audio Properties</h2>
        <p>
          According to Bob, the properties are limited to the acoustical and
          analog electrical behavior of sound and its mathematical renderings in
          digital form.
        </p>

        <h4 className="text-center">1. Audio</h4>
        <p>
          Audio is a stream of data beginning and/or ending as sound. This data
          is connected to our ears through air.
        </p>

        <p>
          In my understanding, data here is all forms of producing audio we
          know. For instance, human voice, music instruments, the noise of a
          car, etc.
        </p>

        <h4 className="text-center">2. Frequency (f) and Time (T)</h4>
        <p>
          Frequency (f or Hz) is the number of oscillations completed in one
          second. Period (T) is the time interval to complete one cycle.
        </p>

        <p>
          Frequency is cycles/second and time is seconds/cycle. Fluency in
          translation of time and frequency is essential for designing and
          optimization. Period formulas for T are computed in seconds, but in
          practice we almost always use milliseconds (1 ms = 0.001 of a second)
        </p>

        <p>Please refer to the book for all pictures and illustrations.</p>

        <h4 className="text-center">3. Cycle</h4>
        <p>
          A cycle is a completed oscillation, a round trip that returns to the
          starting state of equilibrium. A period is measured in time
          (milliseconds) and a cycle is measured in completed trips.
        </p>

        <span>
          A cycle at 250 Hz has a period of 4 ms. One cycle at 125 Hz (or two
          cycles at 250 Hz) have 8 ms periods.
        </span>

        <p>
          We often subdivide the cycle by fractions or degrees of phase, with
          360 degrees representing a complete cycle.
        </p>

        <span>
          It is common to use the term "cycle when dealing with the phase
          response, e.g. 1 ms @ 250 Hz, which is 1/4 cycle (90 degrees)."
        </span>

        <h4 className="text-center">3. Oscillation</h4>
        <p>
          Oscillation is the back and forth process of energy transfer through a
          medium (sound in the air, for instance).
        </p>

        <h4 className="text-center">5. Amplitude (magnitude)</h4>
        <p>
          Amplitude is the quantitative measure of oscillating energy, the
          extent of mechanical displacement (m, cm, etc), acoustical pressure
          change (SPL), electrical voltage (V), magnetic flux (B), and others.
        </p>

        <span>
          Amplitude values can be expressed linearly (volts) or logarithmically
          as a ratio (dB scale).
        </span>

        <span>
          One of the most straightforward aspects of audio: Bigger is Bigger.
        </span>

        <h4 className="text-center">6. DC Polarity (Absolute Polarity)</h4>
        <p>
          DC stands for Direct Current, and DC polarity is the signal's
          directional component (positive or negative) relative to equilibrium.
        </p>

        <h4 className="text-center">7. Absolute Amplitude</h4>
        <p>
          It is the energy level relative to equilibrium (audio silence).
          Electrical audio silence is 0 VAC, whether DC is present or not.
        </p>

        <span>
          Only AC can make audio. DC moves a speaker but the only sound it can
          make is the speaker burning.
        </span>

        <p>
          Acoustic systems are referenced to changes above or below the ambient
          air pressure.
        </p>

        <span>
          Absolute amplitude values cannot be less than zero, because we can't
          have less movement than equilibrium.
        </span>

        <h4 className="text-center">8. Relative to a Fixed Reference</h4>
        <p>
          Audio levels change on a moment-to-moment basis. Many reference
          standards for audio are specified in decibel values (dB), which show
          amplitude changes in a relative log scale (like our hearing).
        </p>

        <span>
          One volt, 0 dBV and +2.21dBu are the same amount of voltage, expressed
          in different units or scales.
        </span>

        <span>
          A musical passage with varying level over time can be tracked against
          the fixed reference, e.g. a certain song reaches a maximum level of 8
          volts (+18 dBV, +20.21 dBu) and an acoustical level of 114 dB SPL (114
          dB above the threshold of hearing).
        </span>

        <h4 className="text-center">
          9. Relative to a Variable Reference (Amplitude Transfer Function)
        </h4>
        <p>
          We can monitor the amplitude of constantly changing signals in
          second-cousing form, i.e. relative to a relative.
        </p>

        <p>
          We compare signal entering and exiting a devide, such as music going
          through a processor. The relative/relative measurement (the 2-channel
          output/input comparison) is termed "transfer function measurement",
          the primary form of analysis used in system optimization.
        </p>

        <p>
          Example: the music level is changing, but the output and input
          waveforms track consistently as long as the processor gain remais
          stable.
        </p>

        <span>
          If output and inputs are level matched (a 1:1 ratio), the device has a
          transfer function voltage gain of unity (0 dB). If the voltage
          consistently doubles, its transfer function gain is 2x (+6 dB).
        </span>

        <p>
          We can span the electronic and acoustic domains by comparing the
          processor output with the sound level in the room. This reveals a
          voltage/SPL tracking relationship., such as +0 dBV (1 V) creates 96 dB
          SPL (and +6 dBV (2 V) creates 102 dB SPL).
        </p>

        <h4 className="text-center">10. Peak (PK) and Peak-to-Peak (PK-PK)</h4>
        <p>
          The peak amplitude value is the signal's maximum extent above or below
          equilibrium whereas peak-to-peak is the span between above and below
          values.
        </p>

        <p>
          Any device in the transmission path must be capable of tracking the
          full extent of the pk-pk amplitude. Failure results in a form of
          harmonic distortion known as "clipping". The waveform seen on an
          oscilloscope or DAW is a representation of the pk-pk values.
        </p>

        <h4 className="text-center">11. RMS (Root Mean Squared)</h4>
        <p>
          The RMS value is the waveform's average-ish amplitude. The RMS
          calculation makes AC equivalent to DC.
        </p>

        <p>
          The RMS value is calculated in three steps: (s) squaring the waveform,
          which enlarges and "absolutes", making all values positive; (m)
          finding the squared waveform's mean value; and (r) taking the square
          root to rescale it back to normal size.
        </p>

        <h4 className="text-center">12. Crest Factor</h4>
        <p>
          Crest factor is the ratio between the actual amplitude traced by the
          waveform (the peak or crest) and the heat-load-simulating rms value.
          <span>Still obscure.</span>
        </p>

        <h4 className="text-center">13. Headroom</h4>
        <p>
          Headroom is the remaining peak-peak amplitude capability before
          overload at a given moment, the reserved dynamic range, and our
          insurance policy against overload.
        </p>

        <p>
          Headroom is the remainder between the device's limits and the signal's
          positive or negative peak.
        </p>

        <span>
          An oscilloscope demystifies headroom/clipping because it displays the
          peak-peak waveform. Digital headroom is the remaining upper bits in
          the rendering of the pk-pk waveform.
        </span>

        <h4 className="text-center">14. Phase</h4>
        <p>
          Phase is the radial clock that charts our progress through a cycle. A
          completed cycle is 360 degrees, a half-cycle is 180 degrees, and so
          on. The phase value is calculated in reference to a specific
          frequency.
        </p>

        <h6 className="text-center">14.1 Absolute Phase</h6>
        <p>
          This is the value at a given moment relative to a stationary time
          reference, tipically the internal clock of an analyzer.
        </p>

        <p>
          We don't need to see the absolute phase numbers even though our
          analyzers compute them. It's like having a wristwatch with only a
          second hand, which won't help us get to the gig on time.
        </p>

        <h6 className="text-center">14.2 Relative (Phase Transfer Function)</h6>
        <p>
          Relative phase is the difference between two absolute phase values. A
          series of phase values over frequency taken together create a phase
          slope that can be translated to phase delay.
        </p>

        <h6 className="text-center">14.3 Phase Shift</h6>
        <p>
          The shift is phase change over frequency. This can be stable and
          constant (such as phase shift caused by a filter) or unstable and
          variable (such as wind). Our practical concern is frequency-dependent
          delay.
        </p>

        <p>
          A translation example of a phase shift is: The rise and fall of a drum
          hit would be rounded and expanded because parts of the transient are
          behind others. The secondary concern regarding phase shift is
          compatibility with other devices that share common signals and sum
          together (either in the air or inside our gear).
        </p>

        <p>
          An example is the combination of two different speaker models, with
          unmatched phase shift characteristics. When summed together we get a
          phase shift between the phase shifts.
        </p>

        <h6 className="text-center">14.4 Phase Offset</h6>
        <p>
          Phase offset is the favored term here for phase differences between
          two measured systems and a famous audio sorority. Phase offset is put
          to practical use when correlated sources are summed. With known phase
          and level offsets we can precisely predict the summed response at a
          given frequency.
        </p>

        <p>Distinction between phase offset and phase shift:</p>

        <span>
          Phase shift occurs inside a single device or system. Phase offset is
          between devices or systems. A filter creates phase shift. Moving two
          speakers apart creates phase offset.
        </span>

        <h2>Move on on page 39, time offset</h2>
      </div>
    </>
  );
}
