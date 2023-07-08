import Joi from "joi";

export const signupSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required().messages({
    "string.email": "Email invalid",
    "string.empty": "Email is not empty",
    "string.required": "Email is required",
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
  phoneNumber: Joi.string().pattern(new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/)).message({
    'string.empy': "Please enter a valid phone number",
    'any.required': 'Phone number is required',
  }),
  password: Joi.string().required().min(4).messages({
    "string.empty": "Password is not empty",
    "any.required": "Password is required",
    "string.min": "Password must have at least {#limit} characters",
  }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "any.only": "Password is not match",
    "string.empty": "Confirm password is not empty",
    "string.required": "Confirm password is required",
  }),
  status: Joi.string()
});
