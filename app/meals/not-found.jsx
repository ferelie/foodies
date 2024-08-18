import React from "react";

export default function NotFound() {

  const highlightStyle = {
    background: "linear-gradient(90deg, #f9572a, #ff8a05)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textTransform: "uppercase",
  };

  return (
    <main className="not-found">
      <h1>404 - <span style={highlightStyle}>Meal</span> Not Found</h1>
      <p>Couldn't find the <span >meal</span> you were looking for</p>
    </main>
  );
}
