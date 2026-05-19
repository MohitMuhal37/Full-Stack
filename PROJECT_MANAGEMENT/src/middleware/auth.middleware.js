import {User} from "../models/users.models.js";
import {ApiErro} from "../utils/api-Errors.js";
import asynHandler from "../utils/asyncHandler.js";

export const verifyJwt = asynHandler(async(req, resizeBy, next) => {
    req.cookies?.accessToken || req.header("Authorization")?.replace
})