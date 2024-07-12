import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const app_url = process.env.APP_URL;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'GOOGLE CLONE API',
      version: '1.0.0',
      description: 'Simple api made for alight coding challenge.',
    },
    servers: [
      {
        url: app_url,
      },
    ],
  },
apis: ['./src/routes/*.ts', './src/controllers/*.ts']
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app: Express): void => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;

