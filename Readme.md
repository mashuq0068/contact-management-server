# Contact Management Backend

This is the backend for the Contact Management application, providing APIs to manage contacts.

## Table of Contents

- [Getting Started](#getting-started)
- [Routes](#routes)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [Scripts](#scripts)

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/contact-management-server
    ```

2. Navigate to the project directory:

    ```bash
    cd contact-management-backend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up your environment variables:

    Create a `.env` file in the project root and add the following:

    ```env
    DB_USER=your_mongodb_username
    DB_PASS=your_mongodb_password
    ```

5. Run the application:

    ```bash
    npm start
    ```

    The backend will be running on [https://contact-management-server-indol.vercel.app/](https://contact-management-server-indol.vercel.app/).

## Routes

- `POST /contacts`: Create a new contact.
- `GET /contacts`: Retrieve all contacts.
- `PATCH /contacts/:id`: Update a contact by ID.
- `PATCH /contacts/markedFavorite/:id`: Mark a contact as a favorite.
- `PATCH /contacts/unMarkedFavorite/:id`: Unmark a contact as a favorite.
- `DELETE /contacts/:id`: Delete a contact by ID.
- `GET /health`: Check if the web server is running.

## Configuration

If anyone want to rebuilt this project. Update your `.env` file with current MongoDB username and password.

## Dependencies

- `cors`: Middleware to enable CORS (Cross-Origin Resource Sharing).
- `dotenv`: Loads environment variables from a `.env` file.
- `express`: Web application framework for Node.js.
- `mongodb`: MongoDB driver for Node.js.

## Scripts

- `start`: Start the backend server using `node project-root/src/index.js`.


End of readme
