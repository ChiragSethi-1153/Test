import axios from "axios"

 const loginService = async (inputs) => {
    console.log(inputs)
        const response = await axios.post(process.env.REACT_APP_SERVER + '/login', inputs)
        return response
    }

export default loginService