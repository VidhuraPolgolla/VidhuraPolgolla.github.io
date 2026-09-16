/* ============================================================
   VIDEOS
   ------------------------------------------------------------
   Add a video to any project by putting it inside that
   project's square brackets [ ].

   Each video is one line and looks like this:

        ["YOUTUBE_LINK", "Caption under the video"],

   Paste the whole YouTube link. Any of these work, and the
   extra bits after the question mark do not matter:

        https://youtu.be/aB3dEfG7hIj
        https://youtu.be/aB3dEfG7hIj?si=Kd93mWq2
        https://www.youtube.com/watch?v=aB3dEfG7hIj
        https://www.youtube.com/shorts/aB3dEfG7hIj

   On YouTube use the Share button to copy the link. Do not
   type it by hand, because one wrong character stops it
   working.

   You can also use a video file you uploaded next to
   index.html, by writing the file name instead:

        ["glove-demo.mp4", "Full test cycle running"],

   A project can have more than one video. Just add another
   line under it. Leave the brackets empty if there is no
   video for that project.

   Keep every comma, quote mark and bracket exactly as shown.
   ============================================================ */

const VIDEOS = {

  // 1. Automated Glove Pin-Hole Detection Machine
  glove: [
    ["https://youtu.be/sUWKrGSTWQY", "Marketing video"],
  ],

  // 2. Double-Feeding Corrugated Box Forming Machine
  boxmachine: [
    // ["https://youtu.be/aB3dEfG7hIj", "CAD motion study of the forming sequence"],
  ],

  // 3. Automated Sorting System
  sorting: [
    // ["https://youtu.be/aB3dEfG7hIj", "Sorting two part types at the exhibition"],
  ],

  // 4. Automation of the LABSA Pumping System
  labsa: [
  ],

  // 5. Changeover Time Reduction in a Volumetric Filling Machine
  changeover: [
  ],

  // 6. Fully Automated Chinese Rolls Production Line
  rolls: [
  ],

  // 7. Vibrating Spice Sprinkler Machine
  sprinkler: [
  ],

  // 8. Sandwich Biscuit Stacking Mechanism
  stacking: [
  ],

  // 9. Air-Trapping Mechanism for a Vertical Form-Fill-Seal Machine
  airtrap: [
  ],

  // 10. Multihead Weigher Hopper Modification
  hopper: [
  ],

};
