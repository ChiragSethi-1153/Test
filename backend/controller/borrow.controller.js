const { borrowService } = require("../services")

exports.createBorrower = async (req, res) => {
    try{
        const response = await borrowService.createBorrower(req)
        if(response === 404){
            return res.status(404).json({message: 'No stock left'})
        }else{
            return res.status(201).json(response)
        }
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}


exports.editBorrower = async (req, res) => {
    try{
        const response = await borrowService.editBorrower(req)
            return res.status(201).json(response)

    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}

exports.getAllBorrowers = async (req, res) => {
    try{
        const response = await borrowService.getBorrowers(req)
        if(response === 404 ){
            return res.status(404).json({message: 'No borrower found'})
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
