import axios from "axios"

 const signupService = async (inputs) => {

        const response = await axios.post(process.env.REACT_APP_SERVER + '/signup', inputs)
        return response
    
}

export default signupService