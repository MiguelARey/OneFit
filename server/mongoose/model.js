const mongoose = require("mongoose");
const schema = require("./schema");
require("dotenv").config();

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASSWORD}@cluster0.63kiiws.mongodb.net/`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

const models = {};
for (let key in schema) {
  models[key] = mongoose.model(key, schema[key]);
}

connectToMongoDB();

module.exports = models;
