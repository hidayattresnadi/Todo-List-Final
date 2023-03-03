const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const hash = (password)=>{
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt)
}
const token = (payload)=>jwt.sign(payload, process.env.SECRET_KEY)
const compareHash = (passwordBody,passwordDataBase)=>bcrypt.compareSync(passwordBody, passwordDataBase)
const decodeToken = (token)=> jwt.verify(token, process.env.SECRET_KEY)

module.exports = {hash,compareHash,token,decodeToken}