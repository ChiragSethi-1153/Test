import axios from "axios"

 const addBookService = async (input) => {
    console.log(input.formData)

    const config = {
        headers: {'authorization': `Bearer ${input.token}`,
        "Content-type": 'multipart/form-data'
    }
}

    console.log(config)
        const response = await axios.post(process.env.REACT_APP_SERVER + '/book', input.formData, config)
        return response
    }

export default addBookService