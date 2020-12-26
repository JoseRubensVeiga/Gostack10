import React from "react";

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
    </>
  );
}

export default App;
