import Joi from "joi"

const SchemaProductUpdate = Joi.object({
    name: Joi.string().required().min(4).message({
        "string.empty": `name should not be empty`,
        "string.min":"name should be at least 4 character"
    }),
    categoryId: Joi.string().required(),
    description:Joi.string().required(),
    categoryId: Joi.string().required(),
    discount: Joi.number(),
    images: Joi.array(),
    status: Joi.string(),
    storage: Joi.array().required().min(1).messages({
        'array.base': 'You should be enter storage',
        'array.min': 'You should be enter storage',
    })

    
})
export default SchemaProductUpdate