import connect from "../../config/db"
import Categories from "../../models/Categories"

const getAllCate = async function(req,res){
    const method = req.method
    const { page = 1, limit = 0, category } = req.query;
    console.log(limit);
    console.log(page);
    await connect()
    switch (method) {
        case 'GET':
            try {
                const pageInstance = page - 1;
                const totalItems = await Categories.countDocuments()
                const totalPages = Math.ceil(totalItems / +limit)
                if (page == 0 || page > totalPages) return res.status(404).json({ success: false, message: 'No page found', data:[] });
                if (page || limit || category) {
                    const findInstance = {};
                    const categories = await Categories.find(findInstance).limit(limit).skip(limit * pageInstance).populate({path: 'products'});
                    return res.status(200).json(
                        {
                            success: true,
                            data: categories,
                            perPage: +limit,
                            totalItems,
                            totalPages
                        }
                    )
                }       
            } catch (error) {
                return res.status(500).json({
                    success:false,
                    message:error,
                    data:[]
                })
            }
            break;
    
        default:
            return res.status(500).json({
                message:"Not found"
            })
            break;
    }
}
export default getAllCate