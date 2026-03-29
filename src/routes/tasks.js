const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Task = mongoose.model('Task', new mongoose.Schema({
  title: String,
  completed: Boolean
}));

router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.post('/', async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).json(task);
});

module.exports = router;