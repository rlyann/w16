import express from "express";
import {
    getProductsItem,
} from "../controllers/products-controllers.js";

const router = express.Router();

router.get("/item", getProductsItem);
router.post("/create", postProductsItem);

export default router;