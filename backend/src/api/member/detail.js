import mongoose from "mongoose";
import connect from "../../config/db"
import Users from "../../models/Users"
import { inforUserSchema } from "../../validate/SchemaInforUser";


const getDetailUser = async (req, res) => {
    const { ObjectId } = mongoose.Types;
    const method = req.method

    const { id } = req.params
    if (!ObjectId.isValid(id)) {
        return res.status(404).send({ message: "Id is not a valid" })
    }
    connect()

    switch (method) {
        case "GET":
            try {
                const data = await Users.findOne({ _id: id })
                if (!data) {
                    return res.status(404).json({
                        message: "Can't not get users",
                        data: []
                    })
                }
                return res.status(200).json({
                    message: "Get users successfully",
                    data: data
                })
            } catch (error) {
                return res.status(500).json({
                    message: error
                })
            }
            break;
        case "PATCH":
            try {
                const {error}  = inforUserSchema.validate(req.body)
                if(error){
                    return res.status(400).send({message:error.message});
                }
                const { name, birthday, avatar, gender, phoneNumber } = req.body;
                const data = await Users.findOne({ _id: id })
                if (!data) {
                    return res.status(404).json({
                        message: "Can't not get users",
                        data: []
                    })
                }
                if (!avatar) {
                    await Users.findByIdAndUpdate(
                        id,
                        {
                            name,
                            birthday,
                            gender,
                            phoneNumber,
                        },
                        { new: true }
                    );

                    return res.status(201).json({
                        success: true,
                        message: 'User updated',
                    });
                }
                await Users.findByIdAndUpdate(
                    id,
                    {
                        username,
                        birthday,
                        avatar,
                        gender,
                        phoneNumber
                    },
                    { new: true }
                );
                return res.status(200).json({
                    success: true,
                    message: "User profile successfully uploaded!"
                });
            } catch (error) {
                return res.status(500).json({
                    message: error
                })
            }
            break;
        default:
            break;
    }
}
export default getDetailUser