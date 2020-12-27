const express = require("express");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const projects = [];

app.get("/projects", (req, res) => {
  const { title, owner } = req.query;

  let response = projects;

  if (title) {
    response = response.filter((p) => p.title.includes(title));
  }

  if (owner) {
    response = response.filter((p) => p.owner.includes(owner));
  }

  return res.json(response);
});

app.post("/projects", (req, res) => {
  const { title, owner } = req.body;

  const project = { id: uuidv4(), title, owner };

  projects.push(project);

  return res.json(project);
});

app.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { title, owner } = req.body;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return res.status(400).json({
      error: "No projects founded.",
    });
  }

  projects[projectIndex].title = title;
  projects[projectIndex].owner = owner;

  return res.json(projects[projectIndex]);
});

app.delete("/projects/:id", (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return res.status(400).json({
      error: "No projects founded.",
    });
  }

  projects.splice(projectIndex, 1);

  return res.status(204).send();
});

app.listen(3333, () => {
  console.log("Back-end started! :)");
});
