import React from "react";

export default function Speakers({ speakers }) {
  return (
    <div className="grid grid-cols-3 gap-4 bg-gray-200 p-4">
      {speakers.map((speaker, index) => (
        <div
          key={index}
          className="speaker-card bg-white rounded-lg shadow-md flex flex-col justify-between w-72 h-72"
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
              className="block text-center mt-2 text-blue-500 hover:text-blue-700"
            >
              Speaker Link
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
