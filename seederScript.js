require("dotenv").config();

const productData = require("./data/products");
const citiesData = require("./data/cities");
const connectDB = require("./config/db");
const Product = require("./models/Product");
const City = require("./models/city");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productData);

    await City.deleteMany({});

    await City.insertMany(citiesData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
