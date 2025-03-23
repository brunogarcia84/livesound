import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-center">Mixing Live Sound</h1>

      <div className="separation">
        <h2 className="text-center">Theory and Techniques</h2>
      </div>

      <div className="separation flex flex-wrap justify-evenly">
        <ul>
          <li>
            <Link href="/introduction" className="hover:text-gray-500">
              Introduction
            </Link>
          </li>

          <li>
            <Link href="/console" className="hover:text-gray-500">
              Console and Tools
            </Link>
          </li>

          <li>
            <Link href="/connect" className="hover:text-gray-500">
              Connecting the System
            </Link>
          </li>

          <li>
            <Link href="/microphones" className="hover:text-gray-500">
              Microphones
            </Link>
          </li>

          <li>
            <Link href="/inputs" className="hover:text-gray-500">
              Inputs
            </Link>
          </li>

          <li>
            <Link href="/gain-structure" className="hover:text-gray-500">
              Gain Structure
            </Link>
          </li>

          <li>
            <Link href="/hpf" className="hover:text-gray-500">
              High Pass Filter
            </Link>
          </li>

          <li>
            <Link href="/eq" className="hover:text-gray-500">
              Introducing EQ
            </Link>
          </li>

          <li>
            <Link href="/eq-for-outputs" className="hover:text-gray-500">
              EQ for Outputs
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/eq-for-drums" className="hover:text-gray-500">
              EQ for Drums
            </Link>
          </li>

          <li>
            <Link href="/eq-for-instruments" className="hover:text-gray-500">
              EQ for Bass, Guitars, and Keyboards
            </Link>
          </li>

          <li>
            <Link href="/eq-for-acoustics" className="hover:text-gray-500">
              EQ for Acoustic Instruments
            </Link>
          </li>

          <li>
            <Link href="/eq-for-vocals" className="hover:text-gray-500">
              EQ for Vocals
            </Link>
          </li>

          <li>
            <Link href="/panning" className="hover:text-gray-500">
              Panning for Live Sound
            </Link>
          </li>

          <li>
            <Link href="/faders-groups" className="hover:text-gray-500">
              Faders and Groups
            </Link>
          </li>

          <li>
            <Link href="/auxes" className="hover:text-gray-500">
              Auxes
            </Link>
          </li>

          <li>
            <Link href="/mono-sub-matrix" className="hover:text-gray-500">
              Mono, Sub, and Matrix Mixes
            </Link>
          </li>

          <li>
            <Link href="/compressors" className="hover:text-gray-500">
              Compressors
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/noise-gate" className="hover:text-gray-500">
              Noise Gate
            </Link>
          </li>

          <li>
            <Link href="/output-compression" className="hover:text-gray-500">
              Output Compression
            </Link>
          </li>

          <li>
            <Link href="/reverb" className="hover:text-gray-500">
              Reverb
            </Link>
          </li>

          <li>
            <Link href="/delay" className="hover:text-gray-500">
              Delay (To be done)
            </Link>
          </li>

          <li>
            <Link href="/soundcheck" className="hover:text-gray-500">
              Soundcheck
            </Link>
          </li>

          <li>
            <Link href="/ring-the-pa" className="hover:text-gray-500">
              Ringing the P.A. (To be done)
            </Link>
          </li>
        </ul>
      </div>

      <div className="separation">
        <h2 className="text-center">Tools</h2>
      </div>

      <div className="separation flex flex-wrap justify-evenly">
        <ul>
          <li>
            <Link href="/dibox" className="hover:text-gray-500">
              D.I. Box
            </Link>
          </li>

          <li>
            <Link href="/balancedAndUnbalanced" className="hover:text-gray-500">
              Balanced and Unbalanced Cables
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
