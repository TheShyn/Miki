import mongoose from "mongoose";

const Schema = mongoose.Schema

const User  = Schema({
    email: { type: String, required: true, unique: true },
    name:{type: String},
    password: {type: String , minLength: 8},
    role: {type: String, enum: ['admin', 'user'],  default: 'user'},
    birthday: { type: Date, required: true },
    gender: { type: String, default: 'other' },
    status:{type: String, default: 'enabled'},
    phoneNumber: { type: String, default: '' },
    avatar: { type: String, required: true, default: 'https://res.cloudinary.com/miki-shop-dev/image/upload/v1660383816/users/jnzskcdcgw64n3lorpro.jpg' },
    cart: [
        {
          _id: false,
          product: { type: Schema.Types.ObjectId, ref: "Products" },
          size: { type: String, required: true },
          quantity: { type: Number, required: true },
          name: { type: String, required: true },
          image: { type: String, required: true },
          price: { type: Number, required: true },
          discount: { type: Number, default: 0 },
        },
      ],
},{ 
    versionKey: false,
    timestamps: true
 })

export default mongoose.model('User', User)