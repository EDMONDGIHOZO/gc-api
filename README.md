# GOOGLE CLONE API

A simple Express.js backend built with TypeScript to demonstrate full-stack development skills for alight fullstack developer challenge. 
This app includes a search route that queries an external API.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
  
- **Express.js**: Web framework for Node.js.
  
- **TypeScript**: Superset of JavaScript that adds static typing.

- **Jest**: Testing framework.

- **Axios**: Promise-based HTTP client.
  
- **dotenv**: Loads environment variables from a `.env` file.
  
- **cors**: Middleware for enabling CORS.

## Installation Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/EDMONDGIHOZO/gc-api.git
   cd gc-api

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a .env file in the root directory:
  
   ``PORT=8000``
   
   ``FRONTEND_URL=http://localhost:3000``

5. **For development (with hot reloading)::**
   ```bash
   npm run dev

7. **Build the project::**
    ```bash
    npm run build

9.  **Run test::**
    ```bash
    npm test


# Code Structure

src/: Contains the source code.

controllers/: Logic for handling requests.
searchController.ts: Handles search route logic.
routes/: Defines application routes.
searchRoutes.ts: Route for search functionality.
app.ts: Initializes and configures the Express application.
server.ts: Starts the server.
tests/: Contains test files.

searchRoutes.test.ts: Tests for the search route.
.env: Environment variables.
.env.example: Helps you to know which variable to use in .env.

package.json: Project metadata and scripts.

tsconfig.json: TypeScript configuration.

jest.config.js: Jest configuration.

Additional Features or Considerations
CORS Configuration: CORS is configured to only accept requests from the specified frontend URL.
Environment Variables: Sensitive data and configurations are managed through environment variables.
Error Handling: Basic error handling is implemented for external API calls.
Feel free to extend this project by adding more routes, controllers, and features as needed.
