import Joi from "joi";

export const inforUserSchema = Joi.object({
    name: Joi.string().required().messages({
        "string.empty": "Please enter your username"
    }),
    birthday: Joi.date().required().messages({
        'date.base': 'Birthday must be a valid date',
        'any.required': 'Birthday is required',
    }),
    gender: Joi.string().valid('male', 'female', 'other').required().messages({
        'any.only': 'Gender must be one of "male", "female", or "other"',
        'string.empty': 'Gender is required',
        'any.required': 'Gender is required',
    }),
    phoneNumber: Joi.string().pattern(new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/)).required().messages({
        'string.empy': "Please enter a valid phone number",
        'any.required': 'Phone number is required',
    }),
    avatar: Joi.string().messages({
        'string.empy': "Avatar is required",
        'any.required': 'Avatar is required',
    })
});