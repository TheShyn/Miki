import mongoose from "mongoose";
import connect from "../../../config/db";
import Users from "../../../models/Users";
import { cartUserSchema, cartUserUpdate } from "../../../validate/SchemaCartUser";
import Product from "../../../models/Product";



const cartHandle = async function (req, res) {
    await connect()
    const method = req.method
    const { id } = req.params
    const data = req.body
    console.log(data)
    switch (method) {
        case 'POST':
            try {
                const { product, name, size, quantity, ...rest } = data
                const { error } = cartUserSchema.validate(data)
                if (error) {
                    return res.status(400).send({ message: error.message });
                }

                const checkProduct = await Product.findOne({ _id: product })

                if (!checkProduct) {
                    return res.status(404).send({ message: "Product not found", })
                }
                //check simular product in cart
                const checkProductSize = checkProduct.storage

                const findSize = checkProductSize.find((item) => item.size === size)
                if (!findSize) {
                    return res.status(404).send({ message: "Product size not found", success: false })
                }

                const simular = await Users.findOne({ _id: id })
                if (!simular) {

                    return res.status(404).send({ message: "User not found", data: [] })
                }

                const checkSimular = simular.cart.find((item) => item.product.toString() === product && item.size === size)
                if (checkSimular) {
                    simular.cart.forEach(item => {
                        if (item.product.toString() === product && item.size === size) {
                            item.quantity += quantity;
                        }
                    });
                    const dataUpdate = await Users.findByIdAndUpdate({ _id: id }, { cart: simular.cart }, { new: true });
                    return res.status(200).send({ message: "Add cart successfully", data: dataUpdate })

                }
                const user = await Users.findByIdAndUpdate({ _id: id }, {
                    $addToSet: {
                        cart: data,
                    },
                }, { new: true });
                return res.status(200).send({ message: "Add cart successfully", data: user })

            } catch (error) {
                return res.status(500).json({
                    message: error
                })
            }
            break;
        case 'PATCH':
            try {
                const { quantity, product, size } = data
                const { error } = cartUserUpdate.validate(data)
                if (error) {
                    return res.status(400).send({ message: error.message });
                }
                const user = await Users.findOne({ _id: id })
                if (!user) {
                    return res.status(404).send({ message: "User not found", data: [] })
                }
                const checkProduct = await Product.findOne({ _id: product })

                if (!checkProduct) {
                    return res.status(404).send({ message: "Product not found", })
                }
                const checkSimular = user.cart.find((item) => item.product.toString() === product && item.size === size)
                if (!checkSimular) {
                    return res.status(404).send({ message: "Product not found", data: [] })
                }
                user.cart.forEach(item => {
                    if (item.product.toString() === product && item.size === size) {
                        item.quantity = quantity;
                    }
                });
                const dataUpdate = await Users.findByIdAndUpdate({ _id: id }, { cart: user.cart }, { new: true });
                return res.status(200).send({ message: "Update cart successfully", data: dataUpdate })
            } catch (error) {
                return res.status(500).json({
                    message: error
                })
            }

        case 'DELETE':
            try {
                const { product, size } = data
                if (!product || !size) {
                    return res.status(404).send({ message: "Need send id product and size" })
                }
                const simular = await Users.findOne({ _id: id })
                if (!simular) {
                    return res.status(404).send({ message: "User not found", data: [] })
                }
                const checkSimular = simular.cart.find((item) => item.product.toString() === product && item.size === size)
                if (!checkSimular) {
                    return res.status(404).send({ message: "Product not found", data: [] })

                }
                const dataUpdate = await Users.findByIdAndUpdate(
                    { _id: id },
                    { $pull: { cart: { product: product } } },
                    { new: true }
                );
                return res.status(200).send({ message: "Delete product cart successfully", data: dataUpdate })


            } catch (error) {
                return res.status(500).json({
                    message: error
                })
            }

        default:
            return res.status(404).json({
                message: "Not found"
            })
    }
}
export default cartHandle