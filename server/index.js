const express = require("express");
const {json} = require("body-parser");



var app = express();

app.use(json());
app.use( express.static( `${__dirname}/../build` ) );

app.get("/api/data",(req,res)=>{
    console.log("Getting data")
    res.status(200).json([
        {
            name:"Emmanuel"
        },
        {
            name:"Jason"
        },
        {
            name:"Jerry"
        },
        {
            name:"Ben"
        }
    ])
})

var port = 4000
app.listen(port,()=>{
    console.log("Listening on port: "+port);
})