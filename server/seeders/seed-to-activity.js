const Activity = require("../models/activity")
const mongoose = require('mongoose');

main().catch(err => console.log("OH NO", err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/activities')
    console.log("Open connect")

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

Activity.insertMany([{
    name: "Hiking",
    category: "Sport",
    status: false,
    userName: "Dayat"
}, {
    name: "Basketball",
    category: "Sport",
    status: false,
    userName: "Dayat"
}, {
    name: "Baseball",
    category: "Sport",
    status: false,
    userName: "Dayat"
}])

.then((data)=>{
    console.log(data)
})
.catch((err)=>console.log(err))
