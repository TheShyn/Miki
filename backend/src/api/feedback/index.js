import connect from "../../config/db/index.js"
import Buyer from "../../models/Buyer.js"
import FeedBack from "../../models/FeedBack.js"
import Product from "../../models/Product.js"

const FeedbackHandler = async (req, res) => {
    await connect()
    const { method } = req
    const { userId, content, rate, images, targetId } = req.body;
    switch (method) {
        case "POST":
            try {
                const buyer = await Buyer.findOne({ user: userId, targetId });
                if (!buyer) {
                    return res.status(403).json({
                        success: false,
                        message: 'Bạn không có quyền đánh giá sản phẩm này! Vui lòng mua trước'
                    })
                }
                if (buyer.isFeedback) {
                    return res.status(409).json({
                        success: false,
                        message: "Bạn đã đánh giá sản phẩm này rồi!",
                    });
                }
                await Buyer.findOneAndUpdate(
                    { user: userId, targetId },
                    { $set: { isFeedback: true } }
                )
                await FeedBack.create({ user: userId, content, rate, images, targetId });
    
                const feedbackCount = await FeedBack.countDocuments({ targetId: targetId });

                const rates = await FeedBack.distinct("rate", { targetId: targetId });

                const totalRate = rates.reduce((initValute, Currentvalue)=>initValute + Currentvalue,0)
                
                const updatedProduct = await Product.findOneAndUpdate(
                    { _id: targetId },
                    { rating: totalRate / feedbackCount},
                    { new: true }
                  );
                return res.status(200).send({
                    success: true,
                    message: 'Bạn đã đánh giá thành công!',
                  });
            } catch (error) {
                return res.status(500).json({ message: error, connect: false })
            }
            break;
        default:
            return res.status(405).json({ message: "Method Not Allowed" })
            break;
    }
}
export default FeedbackHandler 
