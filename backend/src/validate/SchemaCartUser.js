import Joi from "joi";

export const cartUserSchema = Joi.object({
    name: Joi.string().min(4).required().messages({
        "string.empty": "Please enter your username",
        "string.min": "Name must be at least 6 characters"
    }),
    price: Joi.number().min(1).required().messages({
        "number.empty": "Price is required",
        "number.min": "Price must be > 1"
    }), 
    discount: Joi.number().min(0).required().messages({
        "number.empty": "Discount is required",
        "number.min": "Discount must be > 0"
    }),
    quantity: Joi.number().min(1).required().messages({
        "number.empty": "Quantity is required",
        "number.min": "Quantity must be > 0"
    }),
    image: Joi.string().required().messages({
        "string.empty": "Image is required",
    }),
    size: Joi.string().required().messages({
        "string.empty": "Size is required",
    }),
    product: Joi.string().required().messages({
        "string.empty": "Id product is required"
    }),
});

export const cartUserUpdate = Joi.object({
    quantity: Joi.number().min(1).required().messages({
        "number.empty": "Quantity is required",
        "number.min": "Quantity must be > 0"
    }),
    size: Joi.string().required().messages({
        "string.empty": "Size is required",
    }),
    product: Joi.string().required().messages({
        "string.empty": "Id product is required"
    }),
});
