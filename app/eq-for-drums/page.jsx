import Link from "next/link";

export default function EqForDrums() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>

      <h1 className="text-center">EQ for Drums</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <p>
          Firstly, it's important to understand that each mic used on a drum kit
          will require a different treatment.
        </p>

        <span>
          Make sure the drums are tunned well to sound good in the room.
        </span>

        <ul>
          <h5>Kick Drum</h5>
          <li>Kick Drum: Assume using one mic positioned a little inside.</li>

          <li>
            Never boost the high frequencies because there's nothing there for
            the kick drum;
          </li>
          <li>Use the high mids to increase or reduce boom coming from it;</li>
          <li>
            Another tip for the mids: Boost at least half of the way. Sweep the
            frequency until you find the desired snap from the beater. Then,
            adjust the boost.
          </li>

          <h5>Snare Drum</h5>
          <li>
            Considering one mic above it, pointing towards the center of the
            snare.
          </li>
          <li>Reduce the amount of kick drum by reducing the low shelf;</li>
          <li>
            If the snare has an unpleasant ring sound, find the frequency and
            cut it; if it sounds good, sweep until you find the frequency that
            makes the snare drum cuts through;
          </li>
          <li>
            Consoles with low and high mids: Use the low to reduce ringing; Use
            the high to increase the snap;
          </li>

          <h5>Overheads</h5>
          <li>Cut the low shelf;</li>
          <li>
            When not using tom mics, use the mid to boost the fundamentals of
            the toms. If you are using tom mics, reduce the mids.
          </li>
          <li>
            Listen to the overheads in combination with the snare mic and find
            the balance between them.
          </li>

          <h5>Tom Mics</h5>
          <li>Focus on the mid frequencies.</li>
          <li>Reduce both high and low shelves.</li>
        </ul>

        <span>
          General rule for live sound: Never boost more than 6dB. Cut as much as
          you like.
        </span>

        <h2>Source of the Information:</h2>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/N3U3i0yJe0A?si=lJg56wWB82DR3o8W"
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
