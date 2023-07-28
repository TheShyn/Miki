import Joi from "joi";

export const MemberSchema = Joi.object({
    firstName: Joi.string().required().messages({
        "string.empty": "Please enter your username"
    }),
    lastName: Joi.string().required().messages({
        "string.empty": "Please enter your username"
    }),
    role: Joi.string().required(),
    phoneNumber: Joi.string().pattern(new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/)).messages({
        'string.empy': "Please enter a valid phone number",
        'any.required': 'Phone number is required',
    }),
    status: Joi.string()
});