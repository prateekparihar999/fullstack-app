const express = require("express");
const router = express.Router();
const Newsletter = require("../models/Newsletter");

router.get("/", async (req, res) => {
  const emails = await Newsletter.find();
  res.json(emails);
});

router.post("/", async (req, res) => {
  const newEmail = new Newsletter(req.body);
  await newEmail.save();
  res.status(201).json(newEmail);
});

module.exports = router;
