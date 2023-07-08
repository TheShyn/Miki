import mongoose from "mongoose";
import connect from "../../config/db";
import Carts from "../../models/Carts";
import { cartsSchema } from "../../validate/SchemaCart";


const allCart = async (req, res) => {
    const method = req.method
    const data = req.body
    const { id } = req.params
    const { page = 1, limit = 0, status } = req.query;
    await connect()
    switch (method) {
        case "GET":
            try {
                const pageInstance = page - 1;
                const findInstance = {};
                var totalItems = await Carts.countDocuments();
                
                if (status) {
                    findInstance.status = status;
                    const item = await Carts.aggregate([
                        { $match: { "status": status } },
                        { $sort: { createdAt: 1 } },
                        {
                            $group: {
                                _id: "$status",
                                count: { $sum: 1 },
                            }
                        },
                    ]);
                    if(!item.length) {
                        return res.status(200).send({
                            message: "Dont have any status " + status
                        });
                    }

                    totalItems = await item[0].count;
                };
                const totalPages = Math.ceil(totalItems / +limit);
                if (page == 0 || page > totalPages) return res.status(404).json({ success: false, message: 'No page found' });
                const carts = await Carts.find(findInstance).sort({ createdAt: -1 })
                    .limit(limit)
                    .skip(limit * pageInstance);
                return res.status(200).send({
                    success: true,
                    carts: carts,
                    perPage: +limit,
                    totalItems,
                    totalPages,
                });

            } catch (error) {
                return res.send({ message: error });
            }
            break;

        default:
            return res.status(404).send({ message: "Method not found" })
            break;
    }
}
export default allCart