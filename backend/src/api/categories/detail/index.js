import connect from "../../../config/db";
import Categories from "../../../models/Categories"
import mongoose from "mongoose";
const getDetailCate = async function (req, res) {
    const { ObjectId } = mongoose.Types;
    const method = req.method
    const {id} = req.params
    if(!ObjectId.isValid(id)){
        return res.status(404).send({message: "Id is not a valid"}) 
    }
    await connect()
    switch (method) {
        case 'GET':
            try {
                const data = await Categories.findOne({_id: id}).populate("products")
                if (!data) {
                    return res.status(400).json({
                        success:false,
                        message: 'Category not found',
                        data:[]
                    })
                }
                return res.status(200).json({
                    success:true,
                    message: "Get categories successfully",
                    data: data
                })

            } catch (error) {
                return res.status(500).json({
                    success:false,
                    message: "Error getting categories",
                    data:[]
                })
            }
            break;

        default:
            return res.status(404).json({
                message: "Not found"
            })
            break;
    }
}
export default getDetailCate