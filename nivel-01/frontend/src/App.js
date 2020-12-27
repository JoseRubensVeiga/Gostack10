import React from "react";

import "./App.css";
import backgroundImage from "./assets/background.jpg";

function App() {
  const projects = ["Projeto 01", "Projeto 02"];

  return (
    <>
      <h1>Hello :)</h1>
      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
      <img width="300" src={backgroundImage} />
    </>
  );
}

export default App;
