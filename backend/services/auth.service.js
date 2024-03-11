const Users = require('../model/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const key = process.env.JWT_KEY

exports.signup = async (req) => {
    try{
    const {name, email, password, role} = req.body;
   
    const existingUser = await Users.findOne({email: email});
      
    if(existingUser){
        return 409;
    }

    const hashedPassword = bcrypt.hashSync(password)

    const user = new Users({
        name,
        email,
        password: hashedPassword,
        role
    });

        await user.save();
        return user
    }
    catch(err) {
        console.log(err)
        return err
    }

}

exports.login = async (req, res) => {
    try{
    const {email, password} = req.body
    
      const existingUser  = await Users.findOne({email:email})
        if(!existingUser) {
            return 404
        }
        const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
        if(!isPasswordCorrect) {
            return 400
        }
        const token = jwt.sign({id: existingUser._id}, key, {
            expiresIn: "12hr"
        });
        console.log("Generated Token\n", token);
        const response = {existingUser, token}
        return response

    } catch(err){
        console.log(err)
        return err; 
    }

} 