import connect from "../../config/db/index.js"
import Product from "../../models/Product.js"

const GetAll = async (req, res) => {
    await connect()
    const { method } = req

    const { page, limit, category } = req.query;

    switch (method) {
        case "GET":
            try {
                const pageInstance = page - 1;
                const totalItems = !category ? await Product.countDocuments() : await Product.countDocuments({ categoryId:category });
                const totalPages = Math.ceil(totalItems / +limit)
                
                if (page == 0 || page > totalPages) return res.status(404).json({ success: false, message: 'No page found' });
                if (page || limit || category) {
                    const findInstance = {};
                    if (category) {findInstance.categoryId = category}
                    const product = await Product.find(findInstance, {
                        name: 1,
                        discount: 1,
                        slug: 1,
                        category: 1,
                        "storage.price": 1,
                        "storage.size": 1,
                        "storage.quantity": 1,
                        images: 1
                    }).limit(limit).skip(limit * pageInstance).populate("categoryId");


                    return res.status(200).json(
                        {
                            success: true,
                            data: product,
                            perPage: +limit,
                            totalItems,
                            totalPages
                        }
                    )
                }
                const product = await Product.find().populate("categoryId");
                console.log(product);
                
                return res.status(200).json({ success: true, data: product })
            } catch (error) {
                return res.status(500).json({ message: error, success: false })
            }
            break;
        default:
            return res.status(405).json({ message: "Method Not Allowed" })
            break;
    }
}
export default GetAll
