import mongoose from "mongoose";
import slug from 'mongoose-slug-updater'

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String, required: true },
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Categories"
    },
    description: { type: String },
    discount: { type: Number, default: 0 },
    images: { type: Array },
    status: { type: String, default: "enabled" },
    storage: [{
        _id:false,
        size: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
    }],
    rating: { type: Number, default: 0 },
    slug: { type: String, slug: 'name', unique: true },
}, {
    versionKey: false,
    timestamps: true,
    collection: 'products',
})

// Product.index({ name: 'text' });
export default mongoose.model('product', Product); 