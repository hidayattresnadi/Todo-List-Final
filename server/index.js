const mongoose = require('mongoose');

main().catch(err => console.log("OH NO", err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/activities')
  console.log("Open connect")

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// let activity =
// {
//   name: 'Go To The Gym',
//   category: 'Sport'
// }

const activitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,'name is required']
  },
  category: String,
  year:Number
});

const Activity = mongoose.model('Activity', activitySchema);
// let activity = new Activity({
//   name: 'Go To The Gym',
//   category: 'Sport'
// })
Activity.create({
  name:'yoi',
  category:'Sport',
  year:'hello'
})
.then((data)=>console.log(data))
.catch((err)=>console.log(err))
// Activity.insertMany([
//   {
//     name:'Fishing',
//     category:'Sport'
//   },
//   {
//     name:'Football',
//     category:'Sport'
//   }
// ])
// .then((data)=>{
//   console.log(data)
// })



