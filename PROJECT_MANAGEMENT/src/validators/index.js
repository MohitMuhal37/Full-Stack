import {body} from "express-validator";

const userRegistorValidator = () => {
    return [
        body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Email is invalid"),

        body("username")
        .trim()
        .notEmpty()
        .withMessage("UserName is required")
        .isLowercase()
        .withMessage("userName must be in lowercase")
        .isLength({min:3})
        .withMessage("username must be at least 3 characters"),

        body("password")
        .trim()
        .notEmpty()
        .withMessage("Password is required"),

        body("fullName")
        .optional()
        .trim()
    ]
}

export {
    userRegistorValidator
}