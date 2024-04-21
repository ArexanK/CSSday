import React from "react";
import Talks from "./talks";

export default function YearData({ yearData }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Data for {yearData.year}</h2>
      <div className="flex justify-between mb-4">
        <div className="w-1/3">
          <p>Days: {yearData.days}</p>
          <p>Date: {yearData.date}</p>
        </div>
        <div className="w-1/3">
          <p>Total Attendees: {yearData.attendees.count}</p>
        </div>
      </div>
      <div className="mb-4">
        <p className="mb-2 font-bold">Countries:</p>
        <ul>
          {Object.entries(yearData.attendees.countries).map(
            ([countryCode, count]) => (
              <li key={countryCode}>
                <span className="inline-block w-16">{countryCode}:</span>{" "}
                <span className="inline-block w-16">{count}</span>
                <div className="w-full h-2 bg-gray-200 mt-1 rounded-full">
                  <div
                    className="h-2 bg-blue-500 rounded-full"
                    style={{
                      width: `${(count / yearData.attendees.count) * 100}%`,
                    }}
                  ></div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
      <Talks talks={yearData.talks} />
    </div>
  );
}
