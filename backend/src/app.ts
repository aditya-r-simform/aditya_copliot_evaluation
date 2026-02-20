import express, { Application } from 'express';
import healthRoutes from './routes/health.routes';
import taskRoutes from './routes/task.routes';
import { errorHandler } from './middleware/errorHandler';
import morgan from 'morgan';

const app: Application = express();

// Middleware

// Request logging middleware
app.use(morgan(function (tokens, req, res) {
	return [
		`[${tokens.method(req, res)}]`,
		tokens.url(req, res),
		'- Execution time:',
		tokens['response-time'](req, res) + 'ms'
	].join(' ');
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', healthRoutes);
app.use('/tasks', taskRoutes);

// Error handling middleware (must be last)
app.use(errorHandler);

export default app;
