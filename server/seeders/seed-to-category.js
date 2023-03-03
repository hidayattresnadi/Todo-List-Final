const Category = require("../models/category")
const mongoose = require('mongoose');

main().catch(err => console.log("OH NO", err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/activities')
    console.log("Open connect")

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

Category.insertMany([{
    name: "Sport",
}, {
    name: "Work",
}, {
    name: "Groceries",
},{
    name: "Studies",
}])

.then((data)=>{
    console.log(data)
})
.catch((err)=>console.log(err))