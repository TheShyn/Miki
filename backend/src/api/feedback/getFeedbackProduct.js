import connect from "../../config/db/index.js"
import Buyer from "../../models/Buyer.js"
import FeedBack from "../../models/FeedBack.js"
import Product from "../../models/Product.js"

const ProductFeedback = async (req, res) => {
    const { method } = req;
    const { targetId, page, limit, rating } = req.query;
    await connect()
    switch (method) {
        case "GET":
            try {
                const pageInstance = page - 1;
                const totalItems = await FeedBack.find({ targetId }).count()
                const totalPages = Math.ceil(totalItems / +limit)

                if (page == 0 || page > totalPages) return res.status(404).json({ success: false, message: 'No page found' });

                if (page || limit) {
                    const findInstance = {
                        targetId: targetId,
                    };
                    if (rating) { findInstance.rate = rating }
                    const feedbacks = await FeedBack.find(findInstance).limit(limit).skip(limit * pageInstance).sort({ createdAt: -1 }).populate('user', 'avatar name status')


                    return res.status(200).json({
                        sucess: true,
                        feedbacks: feedbacks,
                        perPage: +limit,
                        totalItems,
                        totalPages
                    });
                }
                // const feedbacks = await FeedBack.find({ targetId });
                // return res.status(200).json({
                //     sucess: true,
                //     feedbacks: feedbacks,
                // });
            } catch (error) {
                return res.status(500).json({ message: error, connect: false })
            }
            break;
        default:
            return res.status(405).json({ message: "Method Not Allowed" })
            break;
    }
}
export default ProductFeedback 
