import Link from "next/link";

export default function Introduction() {
  return (
    <>
      <button className="border-2 border-white hover:bg-gray-500 rounded-2xl p-2 ml-5 mt-5 cursor-pointer transition-all duration-300">
        <Link href="/">Back</Link>
      </button>
      <h1 className="text-center">Introduction</h1>
      <div className="m-auto max-w-10/12 p-2.5">
        <p>
          First things first, it's important to understand the meaning of the
          term P.A. It means Public Address because it's the way musicians and
          sound engineers address the sound to the crowd.
        </p>

        <h2>A good start for a live mix:</h2>
        <ul>
          <li>
            Are the musicians and musical instruments are delivering a good
            sound?
          </li>

          <li>
            Are the microphones the best types to use, and are they in a good
            position?
          </li>

          <li>
            It's critical to have all the cables in a good to excellent
            condition. Did you check it?
          </li>

          <li>
            Do the amplifiers have the power to provide a good and clear sound
            at the required sound pressure level?
          </li>

          <li>
            Are the loudspeakers suitable for the style of music? Are they
            pointing in the right direction towards the audience and away from
            the walls?
          </li>
        </ul>

        <p>
          All these questions must be answered beforehand. However, the biggest
          influence comes from the acoustics of the venue, because it can cause
          the greatest challenge for the sound engineer to overcome.
          Furthermore, this is the most difficult and costly item to change (if
          it's possible to do so).
        </p>

        <h2>Goals when mixing live music</h2>

        <p>
          The first people a live sound engineers should please have to be the
          performers. When they are comfortable with their sounds, they will
          create a better sound. As a next step, the sound engineer will
          consider the audience and the event organizers. Here are a series of
          questions that will help you determine the style of mix to apply for
          the event:
        </p>

        <ul>
          <li>
            What are the expectations? Are they reasonable, safe, and
            achievable?
          </li>

          <li>
            Should the aim be to re-create the sound of the band or singer as
            their latest album?
          </li>

          <li>
            Should we provide a high-energy mix for the audience to dance?
          </li>

          <li>
            Should we provide a natural reproduction of the acoustic band of the
            stage?
          </li>

          <li>Should we make sure the vocals are always clearly heard?</li>
        </ul>

        <h2>Source of the information:</h2>

        <iframe
          className="m-auto mb-5"
          width="960"
          height="415"
          src="https://www.youtube.com/embed/eKbBQvidT4o?si=cbvnXJakX9a7it5u"
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
