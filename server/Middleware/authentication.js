const { decodeToken } = require("../helper/index")
const User  = require("../models/user")
async function authentication(req, res, next) {
    try {
        let acess_Token = req.headers.acesstoken
        if (!acess_Token) {
            throw { name: 'Unauthorized' }
        }
        let payload = decodeToken(acess_Token)
        let user = await User.findOne({_id: payload.id})
        if (user) {
            req.User = {
                id: user.id,
                userName: user.userName
            }
            next()
        }
        else {
            throw { name: 'Unauthorized' }
        }
    } catch (error) {
        if(error.name==='Unauthorized'){
            res.status(401).json({message:'Unauthorized'})
        }
    }
}

module.exports = { authentication }