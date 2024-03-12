const Users = require("../model/users")
const Books = require("../model/books")

exports.getAllUsers = async (req) => {
    try {
        const userId = req.id
        const { role } = req.query
        if (role) {
                const users = await Users.find({ role: role }, "-password").sort({ createdAt: -1 })
                if(users.length>0){
                    return users
                }
                else{
                    return 404
                }
        }
        else {
            const users = await Users.find({}, "-password").sort({ createdAt: -1 })
            if(users.length>0){
                return users
            }
            else{
                return 404
            }
        }

    } catch (err) {
        console.log(err)
        return err
    }
}

exports.searchUser = async (req) => {
    try {
        const userId = req.id                  
        console.log(userId)
        const { body } = req.query
        const users = await Users.find({ "$or": [{ "name": { $regex: ".*" + body + ".*", $options: 'i' } }, { "email": { $regex: ".*" + body + ".*", $options: 'i' } }] })

        if (users.length > 0) {
            return users
        }
        else {
            return 404
        }


    } catch (err) {
        console.log(err)
        return err
    }
}