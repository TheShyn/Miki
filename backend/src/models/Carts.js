import mongoose from "mongoose";
const Schema = mongoose.Schema;

const cartsSchema = new Schema({
    userId : {
        type:mongoose.Types.ObjectId,
        ref:"Users",
        required:true
    },
    name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    products: [
        {
          _id: false,
          product: { type: Schema.Types.ObjectId, ref: "product", required: true },
          size: { type: String, required: true },
          quantity: { type: Number, required: true },
          name: { type: String, required: true },
          image: { type: String, required: true },
          price: { type: Number, required: true },
          discount: {type:Number, required:true},
        },
      ],
    status: { type: String, enum: ['PENDING', 'SHIPPING', 'SUCCESS', 'CANCELLED'], default: 'PENDING' },


},{
    timestamps: true,
    versionKey: false,
}) 
export default mongoose.model('Cart', cartsSchema)