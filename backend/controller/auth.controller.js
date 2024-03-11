const {authService} = require('../services')


exports.signup = async (req, res) => {

    try{
        const response = await authService.signup(req);
        if(response === 409 ){
            return res.status(409).json({message: 'User already exists! Login instead'})
        }
        else{
            return res.status(201).json(response)
        }
    }
    catch(err) {
        console.log(err)
        return res.status(500).send(err)
    }
}

exports.login = async (req, res) => {

    try{ 
        const response = await authService.login(req, res)
        if(response === 404){
            return res.status(404).json({message: 'User not found. Signup Please!'})
        }
        if(response === 400){
            return res.status(400).json({message: "Invalid Email / Password"})
        }
            
        return res.status(200).json({message: "Successfully Logged In", response})
        
    }
    catch(err){
        console.log(err)
        return res.status(500).send(err)
    }

}
