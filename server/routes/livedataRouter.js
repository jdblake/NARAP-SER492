const express = require("express");
const router = express.Router();
const livedataController = require("../controllers/livedataController")

router.route("/livedata")
.all((req,res,next)=>{
    next();
})
.get(livedataController) //Public

module.exports = router;