import { useEffect, useState } from "react";
import { sequencerToneJs } from "../components/tools/music";

export async function loader() {
  return null;
}

export default function Sequencer() {
  return (
    <div className="flex flex-col max-w-7xl  items-center justify-center m-auto  p-4 py-12">
      <div className="flex flex-col gap-4 items-center justify-center  bg-opacity-10 w-full max-w-7xl">
        <div className="w-full ">
          <div className="py-4">
            <nav className="flex items-center gap-2">
              <a href="/" className="text-blue-500 hover:underline">
                Home
              </a>
              <span className="text-gray-500">/</span>
              <div className="text-gray-500">Sequencer</div>
            </nav>
          </div>
        </div>
        <h2 className=" text-5xl font-bold text-left text-black mx-4">
          Sequencer
        </h2>
        <SequencerToneJs />
      </div>
    </div>
  );
}

function SequencerToneJs() {
  const [selectedKey, setSelectedKey] = useState("CMajor");
  const notesBase = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];

  const startingOctave = 2;

  const notes = notesBase.map((note) => `${note}${startingOctave}`);

  for (let i = 1; i <= 1; i++) {
    notesBase.forEach((note) => {
      notes.push(`${note}${startingOctave + i}`);
    });
  }

  const key = "CMajor";

  const scale = {
    CMajor: ["C", "D", "E", "F", "G", "A", "B"],
    CMinor: ["C", "D", "D#", "F", "G", "G#", "A#"],
    EMajor: ["E", "F#", "G#", "A", "B", "C#", "D#"],
    EMinor: ["E", "F#", "G", "A", "B", "C", "D"],
  };

  const selectedScale = scale[selectedKey];

  //console.log("selectedScale", selectedScale);
  return (
    <div className="flex flex-col gap-4 items-center justify-center  bg-opacity-10 w-full max-w-7xl">
      <select
        className="bg-gray-200 p-2 rounded"
        value={selectedKey}
        onChange={(e) => {
          setSelectedKey(e.target.value);
        }}
      >
        {Object.keys(scale).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      <div className="text-gray-500">Scale: {selectedKey}</div>

      <NotesKeyboard notes={notes} scale={selectedScale} />
    </div>
  );
}

export function NotesKeyboard({ notes, scale }) {
  return (
    <div className="flex flex-row gap-4 items-center justify-center  w-full max-w-7xl bg-lime-50 p-10">
      {notes.map((note) => {
        const removeNumber = note.replace(/[0-9]/g, "");
        console.log(removeNumber);

        const isInScale = scale.find((n) => n === removeNumber);

        return (
          <button
            key={note}
            onClick={() => {
              console.log(note);
              sequencerToneJs(note);
            }}
            className={`${
              note?.includes("#") || note?.includes("b")
                ? "bg-gray-500"
                : "bg-gray-300"
            } p-4 rounded ${isInScale ? "" : "hidden"}`}
          >
            {note}
          </button>
        );
      })}
    </div>
  );
}
