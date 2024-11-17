import express from 'express';

import {
    getPlayers,
    getPlayerById,
    searchForPlayer
} from "../controller/playersController.js";

const router = express.Router();

router
    .route("/get-players")
    .get(getPlayers);

router
    .route("/get-player/:id")
    .get(getPlayerById);

router
    .route("/search-for-player")
    .get(searchForPlayer)

export default router;
