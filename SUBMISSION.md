# Submission Summary

## Track Chosen
<!-- Mark your choice with [x] -->
- [x] Backend Only
- [ ] Frontend Only
- [ ] Full-Stack (Both)

## GitHub Copilot Usage Summary
<!-- Describe how you used AI throughout the test. Be specific about when and how you leveraged AI tools. -->

I used GitHub Copilot to accelerate backend development throughout the test. Copilot assisted in:
- Generating the initial structure for the task management API, including models, controllers, and routes.
- Implementing CRUD operations and in-memory storage logic for tasks.
- Integrating third-party middleware (Morgan) for request logging with a custom format.
- Adding advanced validation and sanitization middleware for task creation and updates.
- Refactoring and extending endpoints (e.g., filtering tasks from the last 7 days by priority).
- Ensuring best practices for error handling and validation messages.

I leveraged Copilot suggestions for code snippets, validation logic, and middleware integration, reviewing and customizing the output to fit the requirements and project conventions.

## Key Prompts Used
<!-- List 3-5 important prompts you used with your AI assistant -->

1. "Implement the task management API in this backend"
2. "Request Logging Middleware - Integrate a third-party request logging package (e.g., Morgan...)"
3. "Advanced Validation - Implement custom validation rules (e.g., title length constraints, due dates)"
4. "Get tasks of last 7 days according to their priority"
5. "If the tasks are done then we need to keep it editable"

## Design Decisions (optional)
<!-- Explain key architectural or implementation decisions you made and why -->

- **Decision 1:** [e.g., "Used a singleton service for in-memory task storage"]
  - **Reasoning:** [e.g., "To maintain state consistency across API calls without a database"]

- **Decision 2:** [e.g., "Implemented reactive forms instead of template-driven"]
  - **Reasoning:** [e.g., "Better type safety and validation control"]

- **Decision 3:** 
  - **Reasoning:** 

## Challenges Faced
<!-- Optional: Describe any challenges encountered and how you overcame them -->

One challenge was ensuring robust validation and sanitization for task creation and updates, especially with custom rules like title length and due date checks. I overcame this by implementing a dedicated middleware and iteratively testing edge cases. Integrating third-party middleware (Morgan) with a custom log format also required careful configuration to match the requirements. Additionally, extending the API to support new features (like filtering tasks by date and priority) required thoughtful updates to both the data model and controller logic, which I addressed by incrementally refactoring and testing each change.

## Time Breakdown
<!-- Optional: Approximate time spent on each phase -->

- Planning & Setup: [X minutes]
- Core Implementation: [X minutes]
- Testing & Debugging: [X minutes]
- Additional Requirements (30-min mark): [X minutes]
- Additional Requirements (45-min mark): [X minutes]
- Optional Challenge (if attempted): [X minutes]

## Optional Challenge
<!-- If you attempted an optional challenge, specify which one -->

- [ ] Not Attempted
- [ ] Option 1: Request Logging Middleware
- [ ] Option 2: API Pagination
- [ ] Option 3: Advanced Validation
- [ ] Option 4: Task Filtering & Search
- [ ] Option 5: Form Validation & UX
- [ ] Option 6: Drag-and-Drop Task Reordering
- [ ] Option 7: Local Storage / Offline Support
- [ ] Option 8: Real-time Updates
- [ ] Option 9: Task Statistics Dashboard

## Additional Notes
<!-- Any other information you'd like to share about your implementation -->

[Write your response here]

---

## Submission Checklist
<!-- Verify before submitting -->

- [ ] Code pushed to public GitHub repository
- [ ] All mandatory requirements completed
- [ ] Code is tested and functional
- [ ] README updated (if needed)
- [ ] This SUBMISSION.md file completed
- [ ] MS Teams recording completed and shared
- [ ] GitHub repository URL provided to RM
- [ ] MS Teams recording link provided to RM
