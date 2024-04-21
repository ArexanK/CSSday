import React, { useState, useEffect } from "react";
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

  return (
    <div>
      {data ? (
        <div>
          <ul>
            {Object.keys(data).map((year) => (
              <li key={year}>
                <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <button onClick={() => handleClick(year)}>{year}</button>
                </div>
              </li>
            ))}
          </ul>

          {selectedYear && <YearData yearData={data[selectedYear]} />}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
