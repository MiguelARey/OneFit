const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// just comment
const Result = new Schema({
  type: { type: String, required: true, unique: true },
  img1: { type: String, required: true },
  img2: { type: String, required: true },
  title1: { type: String, required: true },
  title2: { type: String, required: true },
  subMbti: { type: String, required: true },
  summary: { type: String, required: true },
  description: { type: String, required: true },
  match1: { type: String, required: true },
  match2: { type: String, required: true },
  matchImg1: { type: String, required: true },
  matchImg2: { type: String, required: true },
  matchtitle1: { type: String, required: true },
  matchtitle2: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
});

module.exports = Result;
