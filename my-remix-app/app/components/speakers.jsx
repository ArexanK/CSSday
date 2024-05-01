import React from "react";

export default function Speakers({ speakers }) {
  return (
    <div className="grid justify-center">
      {speakers.map((speaker, index) => (
        <div
          key={index}
          className="speaker-card bg-white rounded-lg shadow-md  justify-between w-72 h-72"
        >
          <div className="p-4">
            <img
              src={speaker.avatar}
              alt={`Avatar of ${speaker.name}`}
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <p className="text-center font-semibold">{speaker.name}</p>
            <p className="text-center text-gray-600">{speaker.country}</p>
          </div>
          <div className="p-4">
            <a
              href={speaker.link}
              className="block text-center mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-center"
            >
              Speaker Link
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
