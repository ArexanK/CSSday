import React, { useState, useEffect } from "react";
import Hero from "./hero";
import YearData from "./yearData";

export default function DataDisplay() {
  const [data, setData] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://cssday.nl/data.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (year) => {
    setSelectedYear(year);
  };
  const yearColors = {
    2013: "bg-red-500",
    2014: "bg-blue-500",
    2015: "bg-green-500",
    2016: "bg-yellow-500",
    2017: "bg-indigo-500",
    2018: "bg-pink-500",
    2019: "bg-purple-500",
    2022: "bg-cyan-500",
    2023: "bg-amber-500",
    2024: "bg-lime-500",
  };

  return (
    <div>
      <div className="bg-gray-900 text-white py-20 text-center">
        <Hero />
      </div>

      {data ? (
        <div>
          <div className="overflow-x-auto whitespace-nowrap">
            <ul className="inline-flex space-x-4">
              {Object.keys(data).map((year) => (
                <li key={year}>
                  <div
                    className={`bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded cursor-pointer ${yearColors[year]}`}
                    onClick={() => handleClick(year)}
                  >
                    {year}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {selectedYear && <YearData yearData={data[selectedYear]} />}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
