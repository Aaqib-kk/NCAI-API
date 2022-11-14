const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const userRoutes = require('./routes/user');

const { createShorthandPropertyAssignment } = require('typescript');

const app = express();

mongoose.connect("mongodb+srv://test:" + process.env.MONGO_ATLAS_PW + "@ncaidb.ulqmfhn.mongodb.net/?retryWrites=true&w=majority")
    .then(()=> {
        console.log("Connected to DB");
    })
    .catch(() =>{
        console.log("Connection Failed");
    });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next)=> {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS, PUT");
    next();
});

app.use("/api/user", userRoutes);
// app.listen(port, ()=>{
//     console.log(`connect ${port}`);
// })

module.exports = app;
