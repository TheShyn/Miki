import connect from "../../config/db"
import Categories from "../../models/Categories"

const getAllCate = async function(req,res){
    const method = req.method

    await connect()
    switch (method) {
        case 'GET':
            try {
                const data = await Categories.find().populate({path: 'products'})
                if(!data){
                    return res.status(400).json({
                        success:false,
                        message:'cant get categories',
                        data:[]
                    })
                }
                return res.status(200).json({
                    success:true,
                    message:"Get categories successfully",
                    data: data
                })
                
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