import React from "react";
import Talks from "./talks";

export default function YearData({ yearData }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">{yearData.year}</h2>
      <div className="mb-4">
        <Talks talks={yearData.talks} />
      </div>
    </div>
  );
}
