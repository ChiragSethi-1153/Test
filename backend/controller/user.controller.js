const { userService } = require("../services")

exports.getAllusers = async(req, res) => {
    try{
        const response = await userService.getAllUsers(req)
        if(response === 404 ){
            return res.status(404).json({message: 'No user found'})
        }
        else{
            return res.status(200).json(response)
        }
    }
    catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}

exports.searchUser = async (req, res) => {
    try{    
        const response = await userService.searchUser(req)
        if(response === 404 ){
            return res.status(404).json({message: 'No user found'})
        }
        else{
            return res.status(200).json(response)
        }
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}