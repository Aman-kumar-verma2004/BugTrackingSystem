 Bug Tracking System

 Overview
  The Bug Tracking System is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). This system allows teams to efficiently track and manage software bugs.

 Features
  - User Authentication & Role Management
    - Secure login and registration using JWT authentication.
    - Role-based access control (Admin, Developer, Tester).
  - Issue Management
    - Create, assign, update, and delete bugs.
    - Set status: Open, In Progress, Closed.
    - Attach labels, comments, and files.
  - Comment System
    - Users can add comments to issues.
    - Mentions (@username) support.
  - Real-time Updates (Optional Enhancement)
    - WebSockets or Polling for live issue tracking.
  - Filtering & Searching
    - Filter issues by status, priority, assignee, and tags.
  - Activity Logs
    - Track issue updates and user actions.

 Tech Stack
  - Frontend: React, Recoil (State Management), Tailwind CSS
  - Backend: Node.js, Express.js, MongoDB (Mongoose)
  - Database: MongoDB Atlas
  - Authentication: JWT (JSON Web Token)
  - Deployment: Vercel (Frontend), Render/Railway (Backend)

 Installation & Setup
   1. Clone the Repository
      git clone https://github.com/Aman-kumar-verma2004/bug-tracker.git
      cd bug-tracker


 3. Install Dependencies
   Backend
    cd server
    npm install

   Frontend
    cd client
    npm install


 3. Set Up Environment Variables
  Create a .env file in the server folder and add:
  env
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_secret_key
  PORT=5000


 4. Run the Application
   Backend
    cd server
    npm start

   Frontend
     cd client
     npm start


 API Endpoints
 Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login and get a token

 Issues
- POST /api/issues - Create a new issue
- GET /api/issues - Get all issues
- PUT /api/issues/:id - Update an issue
- DELETE /api/issues/:id - Delete an issue

 Comments
- POST /api/comments - Add a comment to an issue
- GET /api/comments/:issueId - Get all comments for an issue

 Deployment
- Backend: Deploy on Render/Railway
- Frontend: Deploy on Vercel/Netlify
- Database: Use MongoDB Atlas

 Future Enhancements
- Implement real-time notifications using WebSockets.
- Add email notifications for issue assignments.
- Improve UI with additional filtering and sorting options.

 

 Contributors
- [Aman Kumar Verma](https://github.com/Aman-kumar-verma2004)

---
For any questions, feel free to reach out! 🚀
amritbusinessquery@gmail.com

