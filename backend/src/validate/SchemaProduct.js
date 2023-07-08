import Joi from "joi"

const SchemaProduct = Joi.object({
    name: Joi.string().required().min(4).message({
        "string.empty": `name should not be empty`,
        "string.min": "name should be at least 4 character"
    }),
    categoryId: Joi.string().required(),
    description: Joi.string().required(),
    // categoryId: Joi.string().required(),
    discount: Joi.number().min(1).message({
        "string.min": "discount should be > 1"
    }),
    images: Joi.array().required().min(1).message({
        'array.base': 'You should be uploading images',
        'array.min': 'You should be uploading images',
    }),
    status: Joi.string(),
    rating: Joi.number(),
    storage: Joi.array().required().min(1).messages({
        'array.base': 'You should be enter storage',
        'array.min': 'You should be enter storage',
    })


})
export default SchemaProduct