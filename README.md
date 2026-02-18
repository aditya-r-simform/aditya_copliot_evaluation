# AI Assisted Developer Evaluation Test

![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)
![Angular](https://img.shields.io/badge/angular-17.0.0-red)
![TypeScript](https://img.shields.io/badge/typescript-5.3.2-blue)
![Express](https://img.shields.io/badge/express-4.18.2-lightgrey)
![License](https://img.shields.io/badge/license-MIT-green)

## Overview

This is a **60-minute live AI-assisted coding evaluation** designed to assess a developer's ability to work effectively with AI tools like GitHub Copilot or similar assistants. Candidates **must actively use an AI coding assistant** throughout the test to demonstrate both technical proficiency and AI collaboration skills.

The evaluation focuses on practical problem-solving, clean code architecture, and the ability to leverage AI tools efficiently while maintaining code quality and correctness.

### Candidate Choice

You have the **flexibility to choose** what you want to work on:
- **Backend Only** - Implement only the backend API requirements
- **Frontend Only** - Implement only the frontend UI requirements
- **Full-Stack (Both)** - Implement both backend and frontend (recommended for full-stack positions)

Choose based on your role, expertise, and comfort level. Make your choice clear at the start of the evaluation.

### Important Notes
⚠️ **Additional requirements will be provided at the 30-minute and 45-minute marks.** Be prepared to adapt and incorporate new requirements into your existing implementation.

---

## Main Task (MANDATORY)

### Objective
Build a **Task Management Feature** based on your chosen track (Backend, Frontend, or Full-Stack).

⚠️ **Note:** Detailed requirements will be explained verbally by the invigilator at the start of the test. Listen carefully and ask clarifying questions if needed.

### High-Level Requirements

**Backend Track:**
- Implement a RESTful API for task management
- CRUD operations (Create, Read, Update, Delete)
- In-memory data storage (no database)
- Input validation and error handling
- Follow proper REST conventions

**Frontend Track:**
- Build a task management user interface
- Forms for creating/editing tasks
- List view with task display
- Status management functionality
- **Connect to the provided Mock API** (see ./mock-api/README.md)
- Use Angular services for data handling with HttpClient
- Error handling and user feedback
- Handle async operations (loading states)

**Full-Stack Track:**
- Complete both Backend and Frontend requirements
- Integrate frontend with backend API
- End-to-end functionality

### Additional Information
- Task structure and specific field requirements will be provided verbally
- API endpoint specifications will be explained during the test
- Business logic rules and validation requirements will be communicated by the invigilator
- **Remember:** Additional requirements will be given at 30 and 45-minute marks

---

## Optional Advanced Challenge (These are good to have, not mandatory)

⚠️ **Important:** These challenges are **only** for candidates who have **completed the mandatory task**. Do not attempt optional challenges until your main task is fully functional and tested. You cannot work on mandatory and optional tasks simultaneously.

Choose **one** of the following to implement (bonus points, not required):

### Backend Challenges

**Option 1: Request Logging Middleware**
- Add middleware to log all incoming requests
- Include request method, URL, and execution time
- Log format: `[METHOD] /endpoint - Execution time: Xms`

**Option 2: API Pagination**
- Implement simple in-memory pagination for `GET /tasks`
- Support query parameters: `?page=1&limit=10`
- Return paginated results with metadata (total count, current page, etc.)

**Option 3: Advanced Validation**
- Implement custom validation rules (e.g., title length constraints, due dates)
- Add request body sanitization
- Return detailed validation error messages

### Frontend Challenges

**Option 4: Task Filtering & Search**
- Add UI controls to filter tasks by status (`todo`, `in-progress`, `done`)
- Implement real-time search functionality by title/description
- Display active filter count

**Option 5: Form Validation & UX**
- Implement reactive form validation with custom validators
- Add inline error messages
- Show character count for text fields
- Disable submit button while loading

**Option 6: Drag-and-Drop Task Reordering**
- Implement drag-and-drop to reorder tasks
- Visual feedback during drag operations
- Persist new order (update task priorities)

**Option 7: Local Storage / Offline Support**
- Cache tasks in browser localStorage
- Handle offline mode gracefully
- Sync with API when connection is restored
- Show sync status indicator

### Full-Stack Challenges

**Option 8: Real-time Updates**
- Implement polling or WebSocket for real-time task updates
- Show notifications when tasks change
- Handle concurrent edits gracefully

**Option 9: Task Statistics Dashboard**
- Backend: Add endpoint for task statistics
- Frontend: Create dashboard with charts/graphs
- Display completion rates, task distribution by status

---

## Setup Instructions

### Quick Start

Choose your track and follow the setup instructions in the respective folder:

- **Backend Only** → See [backend/README.md](backend/README.md)
- **Frontend Only** → See [frontend/README.md](frontend/README.md) + [mock-api/README.md](mock-api/README.md)
- **Full-Stack** → See [backend/README.md](backend/README.md) + [frontend/README.md](frontend/README.md)

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- Angular CLI (for frontend: `npm install -g @angular/cli`)
- GitHub Copilot or similar AI assistant enabled

### Installation Summary

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   cd YOUR-REPO-NAME
   ```

2. Navigate to your chosen folder(s)
3. Run `npm install` in each folder
4. For backend: Copy `.env.example` to `.env`
5. Follow the specific README instructions

---

## AI Usage Guidelines

### Required AI Interaction

Candidates **must**:
- Use AI actively throughout the coding process
- Ask AI for planning and architecture suggestions before implementing
- Use AI to generate boilerplate code and speed up development
- Verify and validate AI-generated code
- Refactor AI suggestions when necessary

---

## Submission Instructions

After completing the test within 60 minutes:

### 1. Push Your Code
- Create a **new public GitHub repository**
- Push your complete solution including:
  - `backend/` folder (if you chose Backend or Full-Stack)
  - `frontend/` folder (if you chose Frontend or Full-Stack)
  - `README.md` (this file, optionally updated with setup instructions)

### 2. Complete SUBMISSION.md
Fill out the provided `SUBMISSION.md` template file in the root directory with:

- Track chosen (Backend/Frontend/Full-Stack)
- GitHub Copilot usage summary
- Key prompts used
- Design decisions and reasoning
- Challenges faced (optional)
- Time breakdown (optional)
- Optional challenge attempted (if any)

**The template file is already in the repository - just fill it out!**

### 3. Session Recording (Mandatory)

**Recording Method:**
- Create a **Microsoft Teams meeting** with your Reporting Manager (RM) and Technical Manager (TM)
- Start the meeting and begin screen sharing
- **Screen sharing must be of your entire screen** (not just a single window)
- Record the entire 60-minute session through MS Teams recording feature
- Ensure the recording captures:
  - Your full coding session
  - AI prompts used (visible in your IDE)
  - Code writing and testing process
  - Terminal output and browser testing
  - Verbal explanations of your approach

**Recording Guidelines:**
- Test your screen sharing and recording setup before starting
- Ensure audio isEnabled for verbal communication
- Keep camera On (optional but recommended)
- Recording will be stored in MS Teams and accessible to evaluators

### 4. Submit
Provide the following to your RM/TM:
- **GitHub repository URL**
- **MS Teams recording link** (will be available in the meeting chat after recording ends)

---

**Good luck! Remember to use AI actively and demonstrate your collaboration skills with AI tools.**
