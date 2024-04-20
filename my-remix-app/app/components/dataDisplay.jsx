import React, { useState, useEffect } from "react";

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
                <button onClick={() => handleClick(year)}>{year}</button>
              </li>
            ))}
          </ul>
          {selectedYear && (
            <div>
              <h2>Data for {selectedYear}</h2>
              <pre>{JSON.stringify(data[selectedYear], null, 2)}</pre>
            </div>
          )}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
