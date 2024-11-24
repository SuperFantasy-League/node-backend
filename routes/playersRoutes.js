import express from 'express';

import {
    getPlayersStatsByFixture,
    getPlayerStats
} from "../controller/playersController.js";

const router = express.Router();

router
    .route("/get-player-stats-by-fixture/:id")
    .get(getPlayersStatsByFixture);

router
    .route("/get-player-stats/:id")
    .get(getPlayerStats);

export default router;
