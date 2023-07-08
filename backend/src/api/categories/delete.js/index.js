import connect from "../../../config/db";
import Categories from "../../../models/Categories"
import mongoose from "mongoose";
import Product from "../../../models/Product";
const deleteProduct = async function (req, res) {
    const { ObjectId } = mongoose.Types;
    const method = req.method
    const {id} = req.params
    if(!ObjectId.isValid(id)){
        return res.status(404).send({message: "Id is not a valid"}) 
    }
    await connect()
    switch (method) {
        case 'DELETE':
            try {
                const data = await Categories.findOne({_id: id})
                if (!data) {
                    return res.status(400).json({
                        message: 'Category not found'
                    })
                }
                // set all product of this category to default category
                await Product.updateMany({categoryId:id},{$set:{categoryId:'64822a45fe4657527476ecd9'}})
                const updateProduct = await Product.find({ categoryId: "64822a45fe4657527476ecd9" });
                const updatedProductIds = updateProduct.map((product) => product._id.toString());
                await Categories.findByIdAndUpdate('64822a45fe4657527476ecd9', {
                    $addToSet: {
                        products: updatedProductIds,
                    },
                });
                await Categories.deleteOne({_id: id})

                return res.status(200).json({
                    message: "Delete categories successfully",
                })

            } catch (error) {
                return res.status(500).json({
                    message: "Error getting categories"
                })
            }
            break;

        default:
            return res.status(404).json({
                message: "Not found"
            })
            break;
    }
}
export default deleteProduct