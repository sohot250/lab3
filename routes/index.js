const express = require("express");
const router = express.Router();
router.get("/", function (req, res, next) {
  res.locals.pageData = {
    title: "Software Engineering Lab 3",
  };
  res.render("pages/index");
});
module.exports = router;
