import Link from "next/link";

export default function Console() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>
      <h1 className="text-center">Which Console to Choose From?</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <p>
          When thinking about the right mixing console, the first thing to
          consider is if all the necessary equipment connect to the console?
          It's critical to understand the size of the event, the band, and
          everything sourrounding it to determine which console to choose from.
        </p>

        <p>Another aspects are:</p>

        <ul>
          <li>Are there enough mic inputs?</li>
          <li>Are there inputs for instruments and line level?</li>
          <li>Are there stereo inputs for playback machines?</li>
          <li>
            Are there enough outputs for all the amplifiers and powered
            speakers?
          </li>
          <li>
            Are there enough aux channels to send sound for the musicians?
          </li>
          <li>Is there a recording output?</li>
        </ul>

        <p>
          When talking about auxes, ideally you should have one for each monitor
          on stage. If the musician is using an In Ear Monitor, he will require
          a stereo aux.
        </p>

        <p>
          Imagine the following scenario: A musician in front of a stage monitor
          will hear sounds coming from all directions. When mixing an IEM, the
          aim is to reproduce the sensation and stereo image for the musician,
          and that's why it requires a stereo aux.
        </p>

        <p>
          Six auxes should be the minimum requirement for a typical 5-piece rock
          band. One additional aux for effects. Add more musicians and the
          number of auxes will rise as well.
        </p>

        <p>Another points to consider:</p>

        <ul>
          <li>
            Does the venue has proper acoustics? If not, you will do best using
            equipment with an output EQ.
          </li>
          <li>
            Does the venue require more than one pair of speakers and a
            subwoofer for the audience to hear? If so, you will need additional
            outputs, such as a matrix.
          </li>
          <li>
            If some speakers are far away from the stage, you will need to delay
            the speakers that are further. Check if the mixer provides this
            feature.
          </li>
          <li>
            Does the venue have a problem with feedback on stage? If so, you are
            going to need EQ on the output and aux channels.
          </li>
        </ul>

        <h2>Tools of a Good Live Sound Engineer</h2>

        <p>
          Aside from the mics, cables, and speakers, a good live sound engineer
          should carry with himself:
        </p>

        <ul>
          <li>A pair of headphones</li>
          <li>A talkback mic</li>
          <li>Tapes: Gaffer, Label tapes, Electrical tape</li>
          <li>A Marker Pen</li>
          <li>A pair of gloves</li>
          <li>A torch</li>
          <li>Batteries for equipments</li>
          <li>
            USB/Flash Drive - Always have some different kind of music to test
            the speakers
          </li>
        </ul>

        <h2>Source of the Information:</h2>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/zvA5gR-SZTU?si=fJ9OlkHPt5767xVi"
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
