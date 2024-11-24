import express from 'express';

import {
    getLeagueFixtures,
    getTeamFixtures
} from "../controller/fixturesController.js";

const router = express.Router();

router
    .route("/get-league-fixtures")
    .get(getLeagueFixtures);

router
    .route("/get-team-fixtures/:id")
    .get(getTeamFixtures);

export default router;