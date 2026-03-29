const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/tasksdb');

const tasksRouter = require('./routes/tasks');

app.get('/', (req, res) => {
  res.json({ message: "Task Manager API running (Lab2)" });
});

app.use('/tasks', tasksRouter);

if (require.main === module) {
  app.listen(3000, () => console.log("API running on port 3000"));
}

module.exports = app;