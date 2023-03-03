const mongoose = require('mongoose')
const activitySchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true,'name is required']
    },
    category: {
      type: String,
      required: [true,'category is required']
    },
    status:Boolean,
    userName:String
})

const Activity = mongoose.model('Activity', activitySchema);

module.exports=Activity