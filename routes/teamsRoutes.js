import express from 'express';

import{
    getTeams,
    searchForTeam,
    getTeam
} from "../controller/teamsController.js";

const router = express.Router();

router
    .route('/get-teams')
    .get(getTeams);

router
    .route('/search-for-team')
    .get(searchForTeam);

router
    .route("/get-team/:id")
    .get(getTeam);

export default router;