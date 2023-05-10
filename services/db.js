//import mongoose
const mongoose = require('mongoose');
//connection string
mongoose.connect('mongodb://localhost:27017/bankserver',{useNewUrlParser:true})
//creating model
const User = mongoose.model('User',
    {
        acno: Number,
        username: String,
        psw: String,
        balance: Number,
        transactions: []
    })
    module.exports={
        User
    }