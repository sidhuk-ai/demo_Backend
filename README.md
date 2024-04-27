# A Demo Backend Project - For Learning Purpose
# MERN Video Platform Backend

![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express.js](https://img.shields.io/badge/Express.js-Framework-yellow)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![React](https://img.shields.io/badge/React-Frontend-lightblue)

This is the backend repository for a video platform project based on the MERN stack. The MERN stack consists of MongoDB, Express.js, React, and Node.js, providing a robust and efficient framework for building modern web applications.

## Features

- User authentication: Allows users to sign up, log in, and log out securely.
- Video upload: Enables users to upload videos to the platform.
- User management: Admin functionality for managing user accounts and permissions.
- Video management: Admin functionality for managing uploaded videos.

## Technologies Used

- **Node.js**: Backend server environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing user data and videos.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Passport.js**: Authentication middleware for Node.js.
- **Multer**: Middleware for handling file uploads.
- **JSON Web Tokens (JWT)**: Securely manage user sessions.
- **Bcrypt**: Hashing library for password security.

## Getting Started

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Set up a MongoDB database and configure the connection in `config/db.js`.
4. Create a `.env` file in the root directory and add environment variables as needed.
5. Run the development server using `npm start`.

## API Endpoints

- **POST /api/users/signup**: Register a new user.
- **POST /api/users/login**: Log in an existing user.
- **GET /api/users/logout**: Log out the current user.
- **POST /api/videos/upload**: Upload a video file.
- **GET /api/videos**: Get a list of all uploaded videos.
- **DELETE /api/videos/:id**: Delete a specific video by ID.
- **GET /api/admin/users**: Get a list of all users (admin only).
- **DELETE /api/admin/users/:id**: Delete a specific user by ID (admin only).

## Contributors

- John Doe (john.doe@example.com)
- Jane Smith (jane.smith@example.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
