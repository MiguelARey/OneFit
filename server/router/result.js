const express = require("express");
const router = express.Router();
const { Result } = require("../mongoose/model");

// get the result
router.get("/result/", async (req, res) => {
  const result = await Result.find({});
  res.send({ result });
});

router.get("/result/:type", async (req, res) => {
  const { type } = req.params;
  const result = await Result.find({ type: type });
  res.send({ result });
});
// add the result
router.post("/result/create", async (req, res) => {
  const {
    type,
    img1,
    img2,
    title1,
    title2,
    subMbti,
    summary,
    description,
    match1,
    match2,
    matchImg1,
    matchImg2,
    matchtitle1,
    matchtitle2,
  } = req.body;
  const newResult = await Result({
    type,
    img1,
    img2,
    title1,
    title2,
    subMbti,
    summary,
    description,
    match1,
    match2,
    matchImg1,
    matchImg2,
    matchtitle1,
    matchtitle2,
  }).save();
  res.send(newResult._id ? true : false);
});

module.exports = router;
