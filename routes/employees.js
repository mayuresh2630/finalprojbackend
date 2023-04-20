const {Employee}=require("../models/employee")
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    console.log("test")
  const genres = await Employee.find();
  console.log("test1",genres)
  res.send(genres);
});

module.exports = router;