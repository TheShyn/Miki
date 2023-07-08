import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Buyer = new Schema({
   user : { type: Schema.Types.ObjectId, ref: 'User' },
   targetId: { type: Schema.Types.ObjectId, ref: 'product' },
   isFeedback: { type: Boolean, default: false },
},{
    timestamps: true,
    versionKey: false,
}) 
export default mongoose.model('Buyer', Buyer)