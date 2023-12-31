import connect from "../../config/db"
import Product from "../../models/Product"
import mongoose from "mongoose"
import Categories from "../../models/Categories";
import dotenv from 'dotenv'
import SchemaProductUpdate from "../../validate/SchemaProductUpdate";
import { v2 as cloudinary } from 'cloudinary';
dotenv.config()

const UpdateProduct = async (req, res) => {
    const method = req.method
    const { id } = req.params
    let data = req.body
    const { images } = req.body
    //check id valid

    // res.send(data)
    await connect()
    switch (method) {
        case "PATCH":
            try {
                const { categoryId } = data
                let { error } = SchemaProductUpdate.validate(data)
                if (error) {
                    if (images.length) {
                        const arrayImg = images.map(item => {
                            const fileName = item.split('/').pop().replace(/\.[^/.]+$/, '');
                            return "products/" + fileName
                        })
                        cloudinary.api.delete_resources(arrayImg)
                    }
                    return res.status(400).send({ message: error.message });
                }
                const product = await Product.findOne({ _id: id })
                if (!product) {
                    if (images.length) {
                        const arrayImg = images.map(item => {
                            const fileName = item.split('/').pop().replace(/\.[^/.]+$/, '');
                            return "products/" + fileName
                        })
                        cloudinary.api.delete_resources(arrayImg)
                    }
                    return res.status(404).send({ message: "Product not found" });
                }

                const isCate = await Categories.findOne({ _id: categoryId })
                if (!isCate) {
                    if (images.length) {
                        const arrayImg = images.map(item => {
                            const fileName = item.split('/').pop().replace(/\.[^/.]+$/, '');
                            return "products/" + fileName
                        })
                        cloudinary.api.delete_resources(arrayImg)
                    }
                    return res.status(404).send({ message: "Categories not found" });
                }
                // data = {
                //     ...data,
                //     img: product.images[0],
                //     images: product.images
                // }
                // if (images.length > 0) {
                //     const arrayImg = product.images.map(item => {
                //         const fileName = item.split('/').pop().replace(/\.[^/.]+$/, '');
                //         return "products/" + fileName
                //     })
                //     console.log(arrayImg);
                    
                //     cloudinary.api.delete_resources(arrayImg)
                //     data = {
                //         ...data,
                //         img: images[0],
                //         images: images
                //     }
                // }
                const checkCate = await Categories.findOne({_id: data.categoryId})
                if(checkCate.status === 'disabled' && data.status === "enabled") {
                    return res.status(400).send({ message: "This category is disable now. Change your category before you update" });
                }
                
                const productUpdate = await Product.findOneAndUpdate({ _id: id }, { $set: data }, { new: true, useFindAndModify: false })
                await Categories.findByIdAndUpdate(categoryId, {
                    $addToSet: {
                        products: id,
                    },
                });
                await Categories.findByIdAndUpdate(product.categoryId, {
                    $pull: {
                        products: id,
                    },
                });
                return res.status(200).send({ message: "Update product successfully", data: productUpdate })
            } catch (error) {
                // if (images.length) {
                //     const arrayImg = images.map(item => {
                //         const fileName = item.split('/').pop().replace(/\.[^/.]+$/, '');
                //         return "products/" + fileName
                //     })
                //     cloudinary.api.delete_resources(arrayImg)
                // }
                return res.status(500).send({ message: error });
            }

            break;
        default:
            return res.status(404).send({ message: "Invalid method" })
            break;
    }
}
export default UpdateProduct