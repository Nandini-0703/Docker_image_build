import express from "express";

const app = express();

app.get('/' , (req , res) => {
    res.send("Welcome to my App");
})


app.listen(9000 , function(){
    console.log("app listening on port 9000");
})