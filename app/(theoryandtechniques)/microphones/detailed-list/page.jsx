import Image from "next/image";
import Link from "next/link";

export default function DetailedList() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>

      <h1 className="text-center">Detailed List of Microphones</h1>

      <div className="m-auto max-w-10/12 p-2.5">
        <div className="flex justify-evenly separation">
          <div>
            <div className="flex justify-center">
              <Image
                src="/SM58.jpg"
                alt="Shure SM-58"
                width={200}
                height={200}
              />
            </div>

            <p className="text-center mt-4">
              SM-58 - Description from Shure Website{" "}
            </p>

            <ul>
              <li>
                Frequency response tailored for vocals, with brightened midrange
                and bass rolloff
              </li>
              <li>
                Uniform cardioid pickup pattern isolates the main sound source
                and minimizes background noise
              </li>
              <li>Pneumatic shock-mount system cuts down handling noise</li>
              <li>Effective, built-in spherical wind and pop filter</li>
              <li>
                Supplied with break-resistant stand adapter which rotates 180
                degrees
              </li>
              <li>Legendary Shure quality, ruggedness and reliability</li>
              <li>Cardioid (unidirectional) dynamic</li>
              <li>Frequency response: 50 to 15,000 Hz</li>
              <li>Replacement cartridge: R59</li>
              <li>
                Application: <small>Vocal Microphone</small>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-center">
              <Image
                src="/Beta58.jpg"
                alt="Shure SM-58"
                width={200}
                height={200}
              />
            </div>

            <p className="text-center mt-4">
              Beta 58 - Description from Shure Website
            </p>

            <ul>
              <li>
                Frequency response tailored for vocals, with brightened midrange
                and bass rolloff to control proximity effect
              </li>
              <li>
                Uniform supercardioid pattern for high gain before feedback and
                superior rejection of off–axis sound
              </li>
              <li>Neodymium magnet for high signal–to–noise output</li>
              <li>Hardened steel mesh grille that resists wear and abuse</li>
              <li>
                Advanced pneumatic shock mount system that minimizes
                transmission of mechanical noise and vibration
              </li>
              <li>Minimally effected by varying load impedance</li>
              <li>Legendary Shure quality and reliability</li>
              <li>
                Application: <small>Vocal Microphone</small>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-center">
              <Image
                src="/Beta52.jpg"
                alt="Shure Beta52A"
                width={200}
                height={200}
              />
            </div>

            <p className="text-center mt-4">
              Beta 52A - Description from Shure Website
            </p>

            <ul>
              <li>
                Frequency response shaped specifically for kick drums and bass
                instruments
              </li>
              <li>
                Built–in dynamic locking stand adapter with integral XLR
                connector simplifies setup, especially inside a kick drum
              </li>
              <li>
                Studio quality performance, even at extremely high sound
                pressure levels
              </li>
              <li>
                Supercardioid pattern for high gain before feedback and superior
                rejection of unwanted noise
              </li>
              <li>Hardened steel mesh grille that resists wear and abuse</li>
              <li>
                Advanced pneumatic shock mount system that minimizes
                transmission of mechanical noise and vibration
              </li>
              <li>Neodymium magnet for high signal–to–noise ratio output</li>
              <li>Low sensitivity to varying load impedance</li>
              <li>Legendary Shure quality and reliability</li>
              <li>
                Application: <small>Kick Drum and Other Bass Instruments</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="m-auto max-w-10/12 p-2.5">
        <div className="flex justify-evenly separation">
          <div>
            <div className="flex justify-center">
              <Image
                src="/SM57.png"
                alt="Shure SM-57"
                width={200}
                height={200}
              />
            </div>

            <p className="text-center mt-4">
              Shure SM-57 - Description from Shure Website
            </p>

            <ul>
              <li>
                Contoured frequency response for clean, instrumental
                reproduction and rich vocal pickup
              </li>
              <li>
                Professional-quality reproduction for drum, percussion, and
                instrument amplifier miking
              </li>
              <li>
                Uniform cardioid pickup pattern isolates the main sound source
                while reducing background noise
              </li>
              <li>Pneumatic shock-mount system cuts down handling noise</li>
              <li>Extremely durable under the heaviest use</li>
              <li>Frequency response: 40 to 15,000 Hz</li>
              <li>
                Application:{" "}
                <small>Mic Amplified or Acoustic Instruments</small>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-center">
              <Image
                src="/Pro35.jpg"
                alt="Audio Technica Pro35 Clip-on Microphone"
                width={200}
                height={200}
              />
            </div>

            <p className="text-center mt-4">
              Pro35 - Description from Audio Technica Website
            </p>

            <ul>
              <li>
                UniMount® clip permits accurate positioning, provides shock
                resistance and protects element
              </li>
              <li>
                Cardioid polar pattern reduces pickup of sounds from the sides
                and rear, improving isolation of desired sound source
              </li>
              <li>
                Extended frequency response captures subtle nuances of the
                performance
              </li>
              <li>6' (1.8 m) cable permanently attached to microphone</li>
              <li>
                Element: Fixed-charge back plate, permanently polarized
                condenser
              </li>
              <li>Polar Pattern: Cardioid</li>
              <li>Frequency Response: 50-15,000 Hz</li>
              <li>Low Frequency Roll Off: 80 Hz, 18 dB/octave (wired only)</li>
              <li>Open Circuit Sensitivity: -45 dB (5.6 mV) re 1V at 1 Pa</li>
              <li>
                Application: <small>Sax, Toms, Brass, and Percussion</small>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-center">
              <Image src="/NT5.jpg" alt="Rode NT-5" width={200} height={200} />
            </div>

            <p className="text-center mt-4">
              NT5 - Description from RODE Website
            </p>

            <ul>
              <li>Premium small-diaphragm condenser microphone</li>
              <li>1/2-inch gold-sputtered cardioid condenser capsule</li>
              <li>Very low self-noise</li>
              <li>
                Exceptionally accurate cardioid polar pattern and wide frequency
                response
              </li>
              <li>Available as a certified match pair for stereo recording</li>
              <li>
                Application:{" "}
                <small>
                  Instrument Recording; live application: Drum Overheads
                </small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="m-auto max-w-10/12 p-2.5">
        <div className="flex justify-evenly separation">
          <div>
            <div className="flex justify-center">
              <Image
                src="/D12.jpg"
                alt="AKG D12 Large Diaphragm Dynamic Microphone"
                width={200}
                height={200}
              />
            </div>

            <p className="text-center mt-4">
              D12 - Description from AKG Website
            </p>

            <ul>
              <li>Polar Pattern: Cardioid</li>
              <li>Audio Frequency Bandwidth: 17 - 17000 Hz</li>
              <li>Sensitivity: 1.2 mV/Pa</li>
              <li>Electrical Impedance: 200 Ohms</li>
              <li>Recommended Load Impedance: 1000 Ohms</li>
              <li>Maximum SPL for 0.5% THD: 164dB SPL</li>
              <li>
                Application: <small>Kick Drum</small>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-center">
              <Image
                src="/KM184.jpg"
                alt="Neumann KM 184 Matched Pair Condenser Mic"
                width={200}
                height={200}
              />
            </div>

            <p className="text-center mt-4">
              KM 184 - Description from Neumann Website
            </p>

            <ul>
              <li>Cardioid pickup pattern without off-axis coloration</li>
              <li>Very low self-noise</li>
              <li>High SPL capability</li>
              <li>Transformerless electronics</li>
              <li>Octo Set with 8 microphones available</li>
              <li>
                Application: <small>Acoustic Instruments</small>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-center">
              <Image src="/C451.jpg" alt="AKG C451B" width={200} height={200} />
            </div>

            <p className="text-center mt-4">
              C451B - Description from AKG Website
            </p>

            <ul>
              <li>Audio Frequency Bandwidth: 20 - 20000 Hz</li>
              <li>Equivalent Noise Level: 18 dB-A</li>
              <li>Sensitivity: 9 mV/Pa</li>
              <li>Signal to Noise: 76 dB-A</li>
              <li>Preattenuation Pad: -10; -20 dB</li>
              <li>Bass Cut Filter: 75; 150 Hz</li>
              <li>Electrical Impedance: 200 Ohms</li>
              <li>Recommended Load Impedance: 1000 Ohms</li>
              <li>Polar Pattern: Cardioid</li>
              <li>
                Application:{" "}
                <small>
                  Drums, Percussive Instruments, Acoustic Guitar, Drum Overheads
                </small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="m-auto max-w-10/12 p-2.5">
        <div className="flex justify-evenly separation">
          <div>
            <div className="flex justify-center">
              <Image
                src="/Beta87.jpg"
                alt="Shure Beta 87 Supercardioid Microphone"
                width={200}
                height={200}
              />
            </div>

            <p className="text-center mt-4">
              Beta87 - Description from Shure Website
            </p>

            <ul>
              <li>Smooth frequency response with gradual presence rise</li>
              <li>
                Highly consistent supercardioid polar pattern provides superior
                gain-before-feedback
              </li>
              <li>
                Electronic low-frequency roll-off compensates for proximity
                effect
              </li>
              <li>
                Wide dynamic range (117 dB) and low distortion characteristics
              </li>
              <li>Very low susceptibility to RFI and electromagnetic hum</li>
              <li>
                Advanced cartridge shock-mount system absorbs mechanical shocks
                and reduces handling noise
              </li>
              <li>
                Built-in pop filter reduces undesirable wind and breath sounds
              </li>
              <li>Legendary Shure quality and reliability</li>
              <li>
                Application: <small>Vocal Microphone</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
