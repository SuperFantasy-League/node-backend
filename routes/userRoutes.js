import express from 'express';

import {
    registerUser,
    addToRoster,
    removeFromRoster,
    getUserRoster
} from "../controller/userController.js";

const router = express.Router();

router
    .route("/register-user")
    .post(registerUser);

router  
    .route("/add-to-roster")
    .post(addToRoster);

router
    .route("/remove-from-roster")
    .post(removeFromRoster);

router
    .route("/get-roster")
    .post(getUserRoster);

export default router;