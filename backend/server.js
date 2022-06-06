require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const CORS = require('cors');
const PORT = process.env.PORT;

const config = {
    credentials: true,
    origin:['http://localhost:3000']
}
app.use(CORS(config));
const connection = async() => {
    try {
        await mongoose.connect(`${process.env.CONNECTION_STRING}`).then(()=>{
            console.log("Connected Successfully");
        }).catch(err=>{
            console.log(err);
        });
    } catch (error) {
        console.log(error);
    }
}
connection();
app.use(express.json());
app.use(router);
app.listen(PORT,(req,res)=>{
    console.log("Server is running successfully");
});