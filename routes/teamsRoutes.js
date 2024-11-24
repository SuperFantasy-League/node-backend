import express from 'express';

import{
    getTeams,
    getTeam
} from "../controller/teamsController.js";

const router = express.Router();

router
    .route('/get-teams')
    .get(getTeams);

router
    .route("/get-team/:id")
    .get(getTeam);

export default router;