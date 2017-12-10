const express = require('express');
const router = express.Router();

router.get("/static", (req, res) => {
    res.render("calculator/static", {});
});



module.exports = router;