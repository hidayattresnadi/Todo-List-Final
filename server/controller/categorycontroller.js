const Category = require("../models/category")
class CategoryController {
    static async getAllCategories(req, res) {
        try {
            let categories = await Category.find()
            res.status(200).json(categories)
        } catch (error) {
            console.log(error)
        }
    }
    static async newCategory(req,res){
        let {categoryName}=req.body
        try {
            let newCategory=await Category.create({name:categoryName})
            res.status(201).json(newCategory)
        } catch (error) {
            if(!categoryName){
                res.status(400).json({ message: error.errors['name'].properties.message })
            }
        }
    }
}
module.exports = CategoryController