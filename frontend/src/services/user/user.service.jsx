import axios from "axios"

 const fetchUserService = async (input) => {
    console.log(input)

    const config = {
        headers: {'authorization': `Bearer ${input}`
    }
}
        const response = await axios.get(process.env.REACT_APP_SERVER + '/user', config)
        return response
    }

export default fetchUserService