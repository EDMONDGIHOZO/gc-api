# GOOGLE CLONE API

A simple Express.js backend built with TypeScript to demonstrate full-stack development skills for Alight-Coding-Challenge. 
This app includes a search route that queries an external API.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
  
- **Express.js**: Web framework for Node.js.
  
- **TypeScript**: Superset of JavaScript that adds static typing.

- **Jest**: Testing framework.

- **Axios**: Promise-based HTTP client.
  
- **dotenv**: Loads environment variables from a `.env` file.
  
- **cors**: Middleware for enabling CORS.
- **swagger-ui-express**: Swagger UI for API documentation.
- **swagger-jsdoc**: Swagger JSDoc for generating Swagger spec.

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

- **controllers/:** Logic for handling requests. <br>
    - *searchController.ts:* <br>
        Handles search route logic.

- **routes/:** Defines application routes.<br>
    - *searchRoutes.ts*: <br>
        Route for search functionality.

- **app.ts:** Initializes and configures the Express application.
- **server.ts:** Starts the server.
- **tests/:** Contains test files.<br>
    - *searchRoutes.test.ts:* <br>
        Tests for the search route.
- ``swagger.ts:`` Configures Swagger for API documentation.
- ```.env:``` Environment variables.
    - *.env.example:* <br> 
        Helps you to know which variable to use in .env.

- ``package.json:`` 
    - Project metadata and scripts.

- ``sconfig.json:``
    - TypeScript configuration.

    ``jest.config.js:`` 
    - Jest configuration.

## Additional Features or Considerations 

**CORS Configuration:** <br>
- CORS is configured to only accept requests from the specified frontend URL.
*API Documentation:* Swagger UI is available at the root URL (/) for API documentation.

**Environment Variables:** Sensitive data and configurations are managed through environment variables.
Error Handling: Basic error handling is implemented for external API calls.
Feel free to extend this project by adding more routes, controllers, and features as needed.*

**Production deployment:** <br>
This app is deployed on <a href="https://render.com">render.com</a> a platform that allows to deploy nodejs application for free. <br>
To raect api docs. please visit: <a href="https://gc-api-cjwv.onrender.com">google clone api</a>

