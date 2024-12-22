import mongoose from "mongoose";
import Product from "../models/product.model.js";

// GET products (read)
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.log("Error: ", error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};

// POST products (create)
export const createProduct = async (req, res) => {
    const products = req.body; // user will send this data

    if(!products.price || !products.name || !products.image) {
        return res.status(400).json({ success:false, message: 'Please provide all fields' });
    }

    const newProduct = new Product(products)

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.log("Error: ", error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};

// PUT products (update)
export const updateProduct = async (req, res) => {
    const {id} = req.params;

    const products = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Invalid Product Id'});
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, products, { new: true });
        res.status(200).json({ success: true, data: updatedProduct });
    } catch {
        console.log("Error: ", error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};

// DELETE products (delete)
export const deleteProduct = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Invalid Product Id'});
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Product is deleted' });
    } catch (error) {
        console.log("Error: ", error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};