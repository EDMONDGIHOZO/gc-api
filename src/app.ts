import express from "express";
import dotenv from "dotenv";
import searchRoutes from './routes/searchRoutes'
import cors from 'cors'
import setupSwagger from "./swagger";

dotenv.config()

const app = express()
app.use(express.json())

const allowedOrigins = [process.env.APP_FRONTEND_URL];

const corsOptions = {
    origin: function (origin: any, callback: any) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}

app.use(cors(corsOptions))
setupSwagger(app);
app.use('/search', searchRoutes)

export default app;

