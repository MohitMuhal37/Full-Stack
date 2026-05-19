import {User} from "../models/users.models.js";
import {ApiError} from "../utils/api-Errors.js";
import asynHandler from "../utils/asyncHandler.js";

export const verifyJwt = asynHandler(async(req, resizeBy, next) => {
    req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer", "");

    if(!token){
        throw new ApiError(401, "unauthorized request")
    }

    try{
        const decodedToken = jwt.verify(token, process.env.Access_Token_Secret);
        const user = await User.findById(decodedToken?.select(
             "-password -refreshToken -emailVerificationToken -emailVerificationExpiry",
        ))

        
         if(!token){
        throw new ApiError(401, "unauthorized request")
    }
    }catch(error){

    }
})