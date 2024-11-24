import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';

import connectDB from './config/db.js';
import teamRoutes from "./routes/teamsRoutes.js";
import playerRoutes from "./routes/playersRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import fixtureRoutes from "./routes/fixtureRoutes.js";

dotenv.config()

connectDB();

const app = express();

app.use(express.json());

// MIDDLEWARE
app.use(cors());

// ROUTES
app.use('/api/health-check', (req, res) => {
    res.sendStatus(200)
})
app.use('/api/teams', teamRoutes);
app.use('/api/players', playerRoutes);
app.use("/api/users", userRoutes);
app.use("/api/fixtures", fixtureRoutes);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold))