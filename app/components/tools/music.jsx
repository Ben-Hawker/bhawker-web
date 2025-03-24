import * as Tone from "tone";

export function sequencerToneJs(note) {
  const synth = new Tone.Synth().toDestination();

  //play a middle 'C' for the duration of an 8th note
  synth.triggerAttackRelease(note || "C4", "8n");
}
