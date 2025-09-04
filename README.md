## **Mubadalah Frontend (React)**

This is the frontend for a trading application built with React + Vite 

## Description

The app consists of two types of users:

- **Regular Users**
   - View other users' posts
   - Save posts
   - Create their own posts
   - View their profile
   - Delete their posts
   - Edit their profile

- **Admins**
    - View all users' posts
    - Delete users' posts
    - View their profile

Login and signup are included for users with role-based flow. Data is persisted in the backend via PostgreSQL

## User Requirements

1. Login or Signup with a username and password (admins are already predefined and can only log in)

2. Admins can:
    - Read and delete users
    - Read their info

3. Regular Users can:
    - read posts
    - create posts
    - read **their** profile
    - delete **their** posts
    - edit **their** profile

## Technologies

- React 18
- Vite
- Fetch API
- Local Storage (for session persistence)

## Getting Started
```bash
cd Mubadalah
npm install
npm run dev