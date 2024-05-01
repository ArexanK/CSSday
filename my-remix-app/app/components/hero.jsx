import React, { useState } from "react";

import "./keyframes.css";
export default function Hero() {
  return (
    <div className="section bg-gray-100">
      <div
        id="hero"
        className="relative bg-cover bg-center bg-no-repeat transform scale-x-0 transform-origin-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(77, 81, 113, 0.5), rgba(77, 81, 113, 0.5)), url()`,
          backgroundColor: "#f0f0f0",
          height: "calc(100vh - 80px)",
        }}
      ></div>
    </div>
  );
}
