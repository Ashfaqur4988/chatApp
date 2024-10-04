# Simple Chat App

A **real-time chat application** built using **React** and **JavaScript** for the frontend, **Node.js** and **Express** for the backend, **PostgreSQL** as the database, and **Prisma** as the ORM.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Real-time messaging**: Powered by **Socket.io** for instant communication between users.
- **User authentication**: Login, registration, and secure session management using **JWT**.
- **Chat rooms and private messaging**.
- **Message persistence**: Messages are stored in **PostgreSQL**.
- **Typing indicators**: Show when users are typing in a conversation.
- **Online/offline status**: Display user availability in real-time.

---

## Tech Stack

### Frontend

- **React** (UI library)
- **JavaScript** (logic and functionality)
- **Socket.io-client** (real-time communication)
- **Tailwind CSS** (styling)

### Backend

- **Node.js** (runtime)
- **Express** (server framework)
- **Socket.io** (WebSocket implementation)
- **Prisma ORM** (database management)

### Database

- **PostgreSQL** (relational database)

---

## Installation

### Prerequisites

- **Node.js** (version X.X.X)
- **PostgreSQL** (version X.X)
- **npm** or **yarn** (package manager)

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/chat-app.git
   cd chat-app/backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables. Create a `.env` file in the root of your backend project:

   ```
   DATABASE_URL="postgresql://<username>:<password>@<host>:<port>/<database>?schema=public"
   JWT_SECRET="your_jwt_secret_key"
   SOCKET_PORT=8080
   ```

4. Run database migrations using Prisma:

   ```bash
   npx prisma migrate dev --name init
   ```

5. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

---

## Configuration

### Environment Variables

In the backend, you need to set up the following environment variables in your `.env` file:

- `DATABASE_URL`: The URL for your PostgreSQL database.
- `JWT_SECRET`: A secret key for signing JWT tokens.
- `SOCKET_PORT`: The port for the Socket.io server (default: `8080`).

---

## Database Schema

Here’s an example of the schema for your chat app:

```prisma
model User {
  id        Int      @id @default(autoincrement())
  username  String   @unique
  email     String   @unique
  password  String
  messages  Message[]
  createdAt DateTime @default(now())
}

model Conversation {
  id        Int      @id @default(autoincrement())
  users     User[]   @relation("Conversations")
  messages  Message[]
  createdAt DateTime @default(now())
}

model Message {
  id              Int      @id @default(autoincrement())
  content         String
  user            User     @relation(fields: [userId], references: [id])
  userId          Int
  conversation    Conversation @relation(fields: [conversationId], references: [id])
  conversationId  Int
  createdAt       DateTime @default(now())
}
```

---

## API Endpoints

### Authentication

- **POST** `/api/auth/register`: Register a new user.
- **POST** `/api/auth/login`: Log in an existing user and return a JWT.

### Messages

- **GET** `/api/messages/:conversationId`: Get all messages for a specific conversation.
- **POST** `/api/messages`: Send a new message.

### Conversations

- **GET** `/api/conversations`: Get all conversations for the logged-in user.
- **POST** `/api/conversations`: Create a new conversation between users.

---

## Usage

1. Register or log in to access the chat.
2. Create a conversation with another user or join an existing chat room.
3. Send messages in real-time.
4. See which users are online and active.

---

## Testing

To run tests for the backend, ensure you have **Jest** installed and set up your testing environment.

```bash
npm test
```

---

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```

You can now customize it with your app’s details!
```
