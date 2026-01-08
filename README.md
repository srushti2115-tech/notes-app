# Notes  App (React JS)

## Project Overview
This is a simple Notes Management application built using React JS.  
The application allows users to add, view, and delete notes while demonstrating clean component architecture, proper state management, and thoughtful UI state handling.  
The focus of this project is entirely on frontend craftsmanship using React fundamentals.

## How to Run

### Prerequisites
- Node.js version 18 or above

### Steps
1. Install dependencies:
   npm install
2. Start the development server:
   npm run dev
3. Open the application in your browser:
   http://localhost:5173

## Component Breakdown

1.App
  Root component of the application
  Holds the notes state and loading state
  Manages data flow between child components

2.NoteForm
  Handles creation of new notes
  Performs validation for the required title field
  Displays validation errors below the input
  Clears the form on successful submission

3.NoteList
  Renders a list of all created notes

4.NoteItem
  Displays an individual note’s title and description
  Provides a delete button to remove the note

5.Loader
  Displays a loading indicator during simulated data loading

6.EmptyState
  Displays a friendly message when no notes are available

## State Explanation

All application state is managed using React’s built-in hooks (useState and useEffect).
The notes state is stored in the App component, which acts as the single source of truth.
State is passed down to child components via props.
Callback functions are used to update state in a predictable and controlled manner.
No external state management libraries (Redux, Context API, etc.) are used.

## Assumptions & Limitations
The application is frontend-only and does not use a backend or database.
Notes are stored in memory and will be lost on page refresh.
Authentication, persistence, and deployment are intentionally excluded.
Styling is implemented using plain CSS without any external UI frameworks.