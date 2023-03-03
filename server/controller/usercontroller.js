const { hash,compareHash,token } = require('../helper')
const User = require('../models/user')

class UserController {
    static async register(req, res) {
        let { name, phoneNumber, email, userName, password } = req.body
        try {
            let newUser = await User.create({ name, phoneNumber, email, userName, password: hash(password) })
            res.status(200).json({ name: newUser.name, userName: newUser.userName })
        } catch (error) {
            // if (error.name==="ValidationError") {
            //     let validate = error.message.split(" ")
            //     console.log(validate)
            //     let validationMessage=validate.slice(4,validate.length).join(" ")
            //     res.status(400).json({ message: validationMessage })
            // }
            if (!name) {
                res.status(400).json({ message: error.errors['name'].properties.message })
            }
            else if (!phoneNumber) {
                res.status(400).json({ message: error.errors['phoneNumber'].properties.message })
            }
            else if (!email) {
                res.status(400).json({ message: error.errors['email'].properties.message })
            }
            else if (!userName) {
                res.status(400).json({ message: error.errors['userName'].properties.message })
            }
            else if (!password) {
                res.status(400).json({ message: error.errors['password'].properties.message })
            }
            else if(error.name==="MongoServerError"){
                res.status(400).json({message:"user name is already exist"})
            }
        }
    }
    static async login(req,res){
        try {
            let {userName,password}=req.body
            if(!userName || !password){
                throw{name:"fill requirement data"}
            }
            let user = await User.findOne({userName})
            if (!user) {
                throw { name: 'invalidCredentials' }
            }
            let comparePassword = compareHash(password, user.password)
            if (!comparePassword) {
                throw { name: 'invalidCredentials' }
            }
            let payload = {
                id: user.id
            }
            let acessToken = token(payload)
            res.status(200).json({ acessToken,userName })
        } catch (error) {
            if(error.name==="fill requirement data"){
                res.status(400).json({message:"Please input user name and password"})
            }
            else if(error.name==='invalidCredentials'){
                res.status(400).json({message:'error invalid username or password'})
            }
        }
    }
}
module.exports = UserController