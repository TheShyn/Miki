import mongoose from "mongoose";

const Feedback = new mongoose.Schema({
    user: { type:mongoose.Types.ObjectId, required: true, ref: 'User' },
    content: {type: String, required :true},
    rate: { type: Number, required: true },
    images: { type: Array , default:[]},
    targetId: { type:mongoose.Types.ObjectId, required: true, ref: 'product'},
}, {
    timestamps: true,
    versionKey: false,
})


export default mongoose.model('Feedback', Feedback)