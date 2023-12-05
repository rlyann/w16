import express from "express";
import { createProduct, readProducts } from "../services/Products.js";

export const getProductsItem = async (request, response) => {
};

const ProductsItem = await readProducts();

console.log({ productsItem });

response.status(200).json({
});

export const productsItem = async (request, response) => {
    const { title, description, image, price } = request.body;
    const product = await createProduct(title, description, image, price);
    response.json(product);
};