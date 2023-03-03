if(process.env.Node_ENV !== "production"){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 4002;
const router = require('./router/index')

const mongoose = require('mongoose');

main().catch(err => console.log("OH NO", err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/activities')
  console.log("Open connect")

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/',router)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})