import {Router} from "express";
import {login, registerUser} from "../controllers/auth.controllers.js"
import { validate } from "../middleware/validator.middleware.js";
import { userRegistorValidator } from "../validators/index.js";
// import {ApiError}  from "../utils/api-Errors.js";
const router = Router();

router.route("/register").post(userRegistorValidator(),validate ,registerUser);
router.route("/login").post(login);

export  default router;