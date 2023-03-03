const Activity = require("../models/activity")
class ActivityController {
    static async getUserActivities(req, res) {
    try {
        let userName = req.User.userName
        let activities = await Activity.find({userName})
        res.status(200).json(activities)
    } catch (error) {
        console.log(error)
    }
    }
    static async getDetailActivity(req,res){
        try {
            let {id}=req.params
            let activity= await Activity.findById(id)
            res.status(200).json(activity)
        } catch (error) {
            console.log(error)
        }
    }
    static async editActivity(req,res){
        try {
            let {id}=req.params
            let {name,category}=req.body
            await Activity.updateOne({_id:id},{name,category})
            res.status(200).json({message:"activity has been updated"})
        } catch (error) {
            console.log(error)
        }
    }
    static async newActivity(req,res){
        let {name,category}=req.body
        try {
            let userName = req.User.userName
            let newActivity=await Activity.create({name,category,status:false,userName})
            res.status(201).json(newActivity)
        } catch (error) {
            if(!name){
                res.status(400).json({ message: error.errors['name'].properties.message })
            }
            else if(!category){
                res.status(400).json({ message: error.errors['category'].properties.message })
            }
        }
    }
    static async deleteActivity(req,res){
        try {
            let {id}=req.params
            await Activity.deleteOne({ _id: id });
            res.status(200).json({message:"Activity has been deleted"})
        } catch (error) {
            console.log(error)
        }
    }
    static async markActivity(req,res){
        try {
            let {id}=req.params
            await Activity.updateOne({_id:id},{status:true})
            res.status(200).json({message:"activity has been marked"})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = ActivityController