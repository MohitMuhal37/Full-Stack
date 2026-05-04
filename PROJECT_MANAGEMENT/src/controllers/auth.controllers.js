import {User} from  "../models/users.models.js";
import {ApiResponse} from "../utils/api-response.js";
import asyncHandler from "../utils/asyncHandler.js";
import {ApiError} from "../utils/api-Errors.js";
import {emailVerification, sendEmail} from "../utils/mail.js";

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accesstoken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken;
        await user.save({validateBeforeSave :false})
        return {accessToken, refeshToken}
    } catch (error) {
        throw new ApiError(
            500,"Something Went wrong while generating access token"
        );
    }
}

const registerUser = asyncHandler(async (req, res) => {
    const {email,username,password, role} = req.body  

    const existedUser = await User.findOne({
        $or :[{username}, {email}]
    })

    if(existedUser){
       throw new ApiError(409, {message : "User mail & name already exists"}, []) 
    }

    const user = await User.create(
        {
            email,
            password,
            username,
            isEmailVerified : false
        }
    )

    const {unHashedToken, hashedToken, tokenExpiry} = user.generateTempToken();
    user.emailVerificationToken = hashedToken
    user.emailVerificationExpiry = tokenExpiry

    await user.saver({validateBeforeSave:false})
    await sendEmail(
        {
            email : user?.email,
            subject:"Please verify Your email",
            mailgenContent:emailVerification(
                user.username,
                `${req.protocol}://${req.get("host")}/api/v1/users/verify-email/${unHashedToken}`
            )
        });

        const createdUser = await User.findById(user._id).select(
            "-password -refreshToken -emailVerificationToken emailVerificationExpiry",

        );

        if(!createdUser){
            throw new ApiError(500, "something went wrong while registring a user");
        }
        return res.status(201)
        .json(
            new ApiResponse(200,
                {user: createUser}, "User register successfully and verification email has been sent on your email")
        )
})