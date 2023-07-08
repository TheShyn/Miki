import connect from "../../config/db";
import Buyer from "../../models/Buyer";
import Carts from "../../models/Carts";
import Product from "../../models/Product";
import Users from "../../models/Users";
import { cartsSchema } from "../../validate/SchemaCart";


const paymentHandler = async (req, res) => {
    const method = req.method
    const data = req.body
    const { userId, city, address, name, phoneNumber } = req.body;
    await connect()
    console.log(req.body);

    switch (method) {
        case "POST":
            try {
                //validate
                const currentUser = await Users.findById(userId);
                const cart = currentUser.cart;

                if (cart.length < 1) {
                    return res.status(200).json({
                        success: false,
                        message: "Giỏ hàng trống, hãy tiếp tục mua sắm...",
                    });
                }
                await Carts.create({
                    userId: userId,
                    name: name,
                    phoneNumber,
                    address: address + ", " + city,
                    products: cart,
                });

                for (const cartItem of cart) {
                    const product = await Product.findById(cartItem.product);
                    const storage = product.storage.find(item => item.size == cartItem.size)

                    if (cartItem.quantity > storage.quantity) {
                        return res.status(400).json({
                            success: false,
                            message: `Sản phẩm ${cartItem.name} chỉ còn tối đa ${storage.quantity} sản phẩm!`
                        });
                    }
                    
                    await Product.findOneAndUpdate(
                        { _id: cartItem.product, "storage.size": cartItem.size },
                        { $inc: { "storage.$.quantity": -cartItem.quantity } }
                    );
                    await Buyer.create({ targetId: cartItem.product, user: userId })
                    
                }
                await Users.findByIdAndUpdate(userId, {
                    $set: { cart: [] }
                })

                return res.status(200).send({ message: "Payment cart successfully", data: data })
            } catch (error) {
                return res.send({ message: error });
            }
            break;

        default:
            return res.status(404).send({ message: "Method not found" })
            break;
    }
}
export default paymentHandler