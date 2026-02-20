import { Router } from 'express';
import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
} from '../controllers/task.controller';
import { validateTask } from '../middleware/validateTask';

const router = Router();

// GET /tasks - list all tasks
router.get('/', getAllTasks);

// GET /tasks/recent - get tasks from last 7 days by priority
import { getRecentTasksByPriority } from '../controllers/task.controller';
router.get('/recent', getRecentTasksByPriority);

// GET /tasks/:id - get a single task
router.get('/:id', getTaskById);

// POST /tasks - create a new task
router.post('/', validateTask, createTask);

// PUT /tasks/:id - update a task
router.put('/:id', validateTask, updateTask);

// DELETE /tasks/:id - delete a task
router.delete('/:id', deleteTask);

export default router;
