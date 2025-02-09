# Simple Full-Stack Application

This is a simple full-stack application that demonstrates the implementation of various guidelines and best practices.

## Project Structure

```
.
├── .cursor/rules/          # Guidelines and rules
├── backend/               # Express.js + TypeScript backend
└── frontend/             # Next.js + TypeScript frontend
```

## Features

- ✅ Follows all specified guidelines
- 🔒 Implements security best practices
- 📝 Uses TypeScript for type safety
- 🎨 Modern UI with TailwindCSS
- 🔄 State management with Zustand
- ✨ Form validation with Zod

## Getting Started

### Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```
   PORT=4000
   NODE_ENV=development
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The backend will be running on http://localhost:4000

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be running on http://localhost:3000

## Guidelines Implementation

This project follows these guidelines:

1. Base Guidelines
   - Uses structured logging with Winston
   - Implements consistent formatting with Prettier
   - Includes API documentation
   - Proper error handling
   - Security best practices

2. Frontend Guidelines
   - Uses React function components and hooks
   - State management with Zustand
   - Implements accessibility features
   - Uses TailwindCSS for styling

3. Backend Guidelines
   - Centralized error handling
   - Request validation with Zod
   - JWT-based authentication (setup ready)
   - Rate limiting implemented

4. Security Guidelines
   - Environment variables for secrets
   - Input validation
   - CORS policies
   - Security headers with Helmet 