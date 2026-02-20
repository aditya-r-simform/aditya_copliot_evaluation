import { Request, Response } from 'express';
import { Task, TaskPriority } from '../models/task.model';
import { v4 as uuidv4 } from 'uuid';

// In-memory task storage
const tasks: Task[] = [];

// Get tasks from last 7 days, sorted by priority
export const getRecentTasksByPriority = (req: Request, res: Response) => {
  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const filtered = tasks.filter(task => new Date(task.createdAt) >= sevenDaysAgo);
  const priorityOrder: TaskPriority[] = ['high', 'medium', 'low'];
  filtered.sort((a, b) => priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority));
  res.json(filtered);
};

export const getAllTasks = (req: Request, res: Response) => {
  res.json(tasks);
};

export const getTaskById = (req: Request, res: Response) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
};

export const createTask = (req: Request, res: Response) => {
  const { title, description, dueDate, priority } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const now = new Date();
  const newTask: Task = {
    id: uuidv4(),
    title,
    description,
    completed: false,
    createdAt: now,
    updatedAt: now,
    dueDate: dueDate ? new Date(dueDate) : undefined,
    priority: priority || 'medium',
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const updateTask = (req: Request, res: Response) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  // Allow editing even if completed
  const { title, description, completed, dueDate, priority } = req.body;
  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (completed !== undefined) task.completed = completed;
  if (dueDate !== undefined) task.dueDate = dueDate ? new Date(dueDate) : undefined;
  if (priority !== undefined) task.priority = priority;
  task.updatedAt = new Date();
  res.json(task);
};

export const deleteTask = (req: Request, res: Response) => {
  const idx = tasks.findIndex(t => t.id === req.params.id);
  if (idx === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  tasks.splice(idx, 1);
  res.status(204).send();
};
