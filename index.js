import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import productsRoutes from "./routes/products-routes.js";

import "./models/index.js";

const app = express();
const port = 3000;

startSequelize();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());

app.use("/products", productsRoutes);

app.use((err, req, res, next) => {
    if (res.headerSent) {
        return next(err);
    }
    console.log(err);
    res.status(500).json({
        message: "Internal server error",
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});