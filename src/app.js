const express = require('express');
const app = express();
app.use(express.json());

let tasks = [
  { id: 1, title: "Set up the development environment", completed: true },
  { id: 2, title: "Initialize Git repository and push to GitHub", completed: true },
  { id: 3, title: "Configure CI/CD pipeline", completed: false }
];

app.get('/', (req, res) => {
  res.json({ message: "DevOps Task Manager API is running (Lab 1)" });
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const newTask = { id: tasks.length+1, title: req.body.title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(3000, ()=> console.log("API running on port 3000"));