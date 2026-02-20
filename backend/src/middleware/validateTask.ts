import { Request, Response, NextFunction } from 'express';

export function validateTask(req: Request, res: Response, next: NextFunction) {
  const errors: string[] = [];
  let { title, description, dueDate } = req.body;

  // Sanitization
  if (typeof title === 'string') title = title.trim();
  if (typeof description === 'string') description = description.trim();
  if (title) req.body.title = title;
  if (description) req.body.description = description;

  // Validation: title required, min/max length
  if (!title) {
    errors.push('Title is required.');
  } else {
    if (title.length < 3) errors.push('Title must be at least 3 characters.');
    if (title.length > 100) errors.push('Title must be at most 100 characters.');
  }

  // Validation: dueDate (if provided)
  if (dueDate) {
    const due = new Date(dueDate);
    if (isNaN(due.getTime())) {
      errors.push('Due date must be a valid date.');
    } else if (due < new Date()) {
      errors.push('Due date must be in the future.');
    } else {
      req.body.dueDate = due.toISOString();
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }
  next();
}
