import express from 'express';

import {
    registerUser,
    addToRoster,
    removeFromRoster,
    getUserRoster,
    uploadRoster
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

router
    .route("/upload-roster")
    .patch(uploadRoster);

export default router;