import express from 'express';
import dotenv from 'dotenv';
import { router } from './routes/routes.js';

const app = express();

app.use(express.json());

app.use(router)

export default app;