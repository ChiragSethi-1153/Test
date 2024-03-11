import axios from "axios"

 const fetchBookService = async (input) => {
    console.log(input)

    const config = {
        headers: {'authorization': `Bearer ${input}`
    }
}
        const response = await axios.get(process.env.REACT_APP_SERVER + '/books', config)
        return response
    }

export default fetchBookService