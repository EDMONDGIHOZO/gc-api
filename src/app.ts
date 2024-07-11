import express from "express";
import dotenv from "dotenv";
import searchRoutes from './routes/searchRoutes'

dotenv.config()

const app = express()
app.use(express.json())

app.use('/search', searchRoutes)

export default app;

