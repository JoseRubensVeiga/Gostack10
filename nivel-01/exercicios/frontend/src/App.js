import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import api from "./services/api";

import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);

  function loadProjects() {
    api.get("projects").then(({ data: projects }) => {
      setProjects(projects);
    });
  }

  useEffect(() => {
    loadProjects();
  }, []);

  async function addProject() {
    const date = format(new Date(), "dd/MM/yyyy hh:mm:ss");
    const title = `Novo projeto - ${date}`;
    const owner = "José Veiga";

    const { data: project } = await api.post("projects", { title, owner });
    setProjects([...projects, project]);
  }

  return (
    <>
      <h1>Hello :)</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button onClick={addProject}>Adicionar novo projeto</button>
    </>
  );
}

export default App;
