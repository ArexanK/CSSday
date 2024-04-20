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
              <p>Days: {data[selectedYear].days}</p>
              <p>Date: {data[selectedYear].date}</p>
              <p>Total Attendees: {data[selectedYear].attendees.count}</p>
              {Object.keys(data[selectedYear].talks).map((talkIndex) => (
                <div key={talkIndex}>
                  <h3>{data[selectedYear].talks[talkIndex].title}</h3>
                  <p>
                    Description:{" "}
                    {data[selectedYear].talks[talkIndex].description}
                  </p>
                  <ul>
                    {data[selectedYear].talks[talkIndex].speaker.map(
                      (speaker, index) => (
                        <li key={index}>
                          <img
                            src={speaker.avatar}
                            alt={`Avatar of ${speaker.name}`}
                          />
                          <p>Name: {speaker.name}</p>
                          <p>Country: {speaker.country}</p>
                          <a href={speaker.link}>Speaker Link</a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
