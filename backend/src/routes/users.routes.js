import { Router } from "express";
import {login, register } from "../controller/user.controller.js"



const router = Router();
// router.route("/login").get(loginForm);
// router.route("/register").get(registerForm);
// router.post("/login",login);
router.route("/login").post(login);
router.route("/register").post(register);
// router.route("/add_to_activity").post(addToHistory);
// router.route("/get_all_activity").get(getUserHistory);

export default router;