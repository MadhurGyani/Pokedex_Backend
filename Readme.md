# Pokedex Backend

This is the backend for the Pokedex application. It provides APIs for user authentication, managing favorites, and other functionalities. This backend is built using Node.js, Express, and MongoDB Atlas.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Tech Stack

- **Node.js** - JavaScript runtime for building server-side applications
- **Express** - Web framework for Node.js
- **MongoDB Atlas** - Cloud-hosted MongoDB database service
- **JWT** - JSON Web Tokens for secure authentication
- **Bcrypt** - Library for hashing passwords
- **Mongoose** - ODM for MongoDB and Node.js

## Features

- **User Authentication**: Register, login, and logout functionalities
- **Token Refresh**: Refresh access tokens using refresh tokens
- **Favorite Management**: Add or remove Pokémon from favorites
- **Account Management**: Update account details and change password

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/pokedex-backend.git
    cd pokedex-backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables. Create a `.env` file in the root directory and add the following variables:
    ```plaintext
    PORT=8000
    MONGODB_URI=your_mongo_atlas_uri
    ACCESS_TOKEN_SECRET=youraccesstokensecret
    REFRESH_TOKEN_SECRET=yourrefreshtokensecret
    ACCESS_TOKEN_EXPIRY=15m
    REFRESH_TOKEN_EXPIRY=7d
    CORS_ORIGIN=http://localhost:3000
    ```

4. Start the development server:
    ```sh
    npm run dev
    ```

## Usage

Once the server is running, you can use the following API endpoints for various operations.

## API Endpoints

### User Authentication

- **Register** - `POST /api/v1/users/register`
- **Login** - `POST /api/v1/users/login`
- **Logout** - `POST /api/v1/users/logout`
- **Refresh Token** - `POST /api/v1/users/refresh-token`
- **Change Password** - `POST /api/v1/users/change-password`
- **Get Current User** - `GET /api/v1/users/current-user`
- **Update Account Details** - `PATCH /api/v1/users/update-account`

### Favorites

- **Toggle Favorite** - `POST /api/v1/favourites/toggleFavorite`
- **Get Favorites** - `GET /api/v1/favourites/getFavorites`

## Environment Variables

The following environment variables need to be set in the `.env` file for the application to run correctly:

- `PORT`: The port on which the server will run.
- `MONGODB_URI`: The URI of the MongoDB Atlas database.
- `ACCESS_TOKEN_SECRET`: Secret key for signing access tokens.
- `REFRESH_TOKEN_SECRET`: Secret key for signing refresh tokens.
- `ACCESS_TOKEN_EXPIRY`: Expiry time for access tokens.
- `REFRESH_TOKEN_EXPIRY`: Expiry time for refresh tokens.
- `CORS_ORIGIN`: The origin allowed for CORS.

## Folder Structure

```plaintext
├── src
│   ├── controllers
│   │   ├── favorite.controller.js
│   │   └── user.controller.js
│   ├── middlewares
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   ├── models
│   │   ├── favourite.model.js
│   │   └── user.model.js
│   ├── routes
│   │   ├── favourite.routes.js
│   │   └── user.routes.js
│   ├── utils
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   └── asyncHandler.js
│   ├── app.js
│   ├── db
│   │   └── index.js
│   └── index.js
├── .env
├── package.json
└── README.md
