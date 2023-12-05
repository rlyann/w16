import { DataTypes } from "sequelize";
import sequelize from "../configurations/sequelize.js";

const Products = sequelize.define("Products", {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER,
});

export default Products;