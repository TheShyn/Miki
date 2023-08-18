import mongoose from "mongoose";
import connect from "../../config/db";
import Product from "../../models/Product";
import Categories from "../../models/Categories";
import { v2 as cloudinary } from 'cloudinary';

const DeleteProduct = async (req, res) => {
    const { ObjectId } = mongoose.Types;
    const method = req.method
    const { id } = req.params
    console.log(id);
    
    await connect()
    switch (method) {
        case 'DELETE':
            try {
                const product = await Product.findOne({ _id:id })
                if (!product) {
                    return res.status(404).send({ success:false,message: "Product not found" })
                }
                const arrayImg = product?.images?.map(item => {
                    const fileName = item.split('/').pop().replace(/\.[^/.]+$/, '');
                    return "products/" + fileName
                })
                await Categories.findOneAndUpdate(
                    { _id: product.categoryId },
                    { $pull: { products: product._id } },
                    { new: true },
                  );

                await Product.deleteOne({_id:id})
                cloudinary.api.delete_resources(arrayImg)
                return res.status(200).send({success:true,message: "Delete product successfully"})
            } catch (error) {
                return res.status(500).send({ message: error })
            }
            break;
        default:
            return res.status(404).send({ message: "Method not found" })
            break;
    }
}
export default DeleteProduct