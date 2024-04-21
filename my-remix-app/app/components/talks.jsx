import React, { useRef, useEffect } from "react";
import Speakers from "./speakers";

export default function Talks({ talks }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const scrollLeft = container.scrollLeft;
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;

        const scrollPercentage =
          (scrollLeft / (scrollWidth - clientWidth)) * 100;

        const cards = container.querySelectorAll(".talk-card");
        cards.forEach((card) => {
          card.style.animationDelay = `-${scrollPercentage}s`;
        });
      }
    };

    containerRef.current.addEventListener("scroll", handleScroll);

    return () => {
      containerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-x-auto" ref={containerRef}>
      <div className="flex p-4">
        {Object.keys(talks).map((talkIndex) => (
          <div
            key={talkIndex}
            className="talk-card bg-white rounded-lg shadow-md flex flex-col justify-between w-72 h-72 mx-4"
          >
            <div className="p-6">
              <Speakers speakers={talks[talkIndex].speaker} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
