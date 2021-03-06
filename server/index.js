const express = require("express");
const cron = require("node-cron");
const fs = require("fs");
const cors = require('cors');
var serveStatic = require('serve-static');
var history = require('connect-history-api-fallback');
const path = require("path") // Default Node library. 
const bodyparser = require("body-parser");

const app = express();
app.use(cors());
app.use(serveStatic(__dirname + "../../client/dist"));
//app.use(history());
app.use(bodyparser.json()); // get information from html forms
const port = process.env.PORT || 5000; //port we will listen for connections on. 
livedatajob = require("./jobs/livedatajob"); //makes reference to cronjob file so it can run



const router = require("./routes/livedataRouter");
app.use("/", router);

//handle all of the build files for front-end, can remove this code if using seperately 
app.get("*",(req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,'../client/dist/index.html'))
});
app.listen(port, () => console.log(` Server listening on port ${port}!`));
