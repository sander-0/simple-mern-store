import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        equired: true,
    },
    price:{
        type: Number,
        equired: true,
    },
    image:{
        type: String,
        equired: true,
    },
}, {
    timestamps: true, // createdAt, updatedAt
});

const Product = mongoose.model("Product", productSchema);

export default Product;