const express = require('express');
const app = express();
app.use(express.json());

const tasksRouter = require('./routes/tasks');

app.get('/', (req, res) => {
<<<<<<< HEAD
  res.json({ message: "Welcome from MAIN branch" });
=======
  res.json({ message: "Task Manager API is running (Lab 2)" });
>>>>>>> feature/routes-refactor
});

app.use('/tasks', tasksRouter); 

app.listen(3000, ()=> console.log("API running on port 3000"));