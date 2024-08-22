// import Task, { find } from '../models/Task.js';
import { Task } from '../models/Task.js';
export async function getTasks(req, res) {
  try {
    const tasks = await find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function createTask(req, res) {
  const { title, description } = req.body;
  try {
    const newTask = new Task({ title, description });
    const task = await newTask.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Additional CRUD operations like updateTask, deleteTask can be added similarly.
