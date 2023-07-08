import mongoose from "mongoose";
import connect from "../../config/db";
import Carts from "../../models/Carts";
import { cartsSchema } from "../../validate/SchemaCart";


const editCart = async (req,res) =>{ 
    const method = req.method
    const { id } = req.params
    const {status} = req.body
    await connect()
    switch (method) {
        case "PATCH":
            try {

                const cart = await Carts.findById(id);
                if (!cart) return res.status(404).send({
                  success: false,
                  message: "Cart not found!"
                });
                if (cart.status == 'SUCCESS' || cart.status == 'CANCELLED') return res.status(200).json({
                  success: false,
                  message: "Cart status can't channge!"
                });

                await Carts.findByIdAndUpdate(cart.id, { status });
                
                return res.status(200).send({ message: "Update cart successfully"})
            } catch (error) {
                return res.send({ message: error });
            }
            break;
    
        default:
            return res.status(404).send({ message: "Method not found" })
            break;
    }
}

export default editCart