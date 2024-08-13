const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect("mongodb+srv://devkantsah43:Devmong%4043@cluster0.qeg0cnu.mongodb.net/admin?");
const app = express();

const userSchema = new mongoose.Schema({
    username: String(),
    password: String(),
    name: String()
})

const user = mongoose.model('user', userSchema);

const firstuser = new user.insertMany([{
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
},
{
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
},
{
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
    }]);

firstuser.save();

app.listen(3000, () => {
    console.log('running');
})