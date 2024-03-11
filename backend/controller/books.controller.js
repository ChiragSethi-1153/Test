const { bookService } = require("../services")


exports.addBook = async (req, res) => {
    try{
        const response = await bookService.addBook(req)
        if(response === 401 ){
            return res.status(401).json({message: 'User unauthorized'})
        }
        else{
            return res.status(201).json(response)
        }
    }
    catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}

exports.editBook = async(req, res) => {
    try{
        const response = await bookService.editBook(req)
        if(response === 401 ){
            return res.status(401).json({message: 'User unauthorized'})
        }
        else{
            return res.status(201).json(response)
        }
    }
    catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
    
}

exports.deleteBook = async(req, res) => {
    try{
        const response = await bookService.deleteBook(req)
        if(response === 401 ){
            return res.status(401).json({message: 'User unauthorized'})
        }
        else{
            return res.status(201).json(response)
        }
    }
    catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}

exports.getAllBooks = async (req, res) => {
    try{
        const response = await bookService.getAllBooks(req)
        return res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}

exports.searchBooks = async (req, res) => {
    try{
        const response = await bookService.searchBooks(req)
        if(response === 404 ){
            return res.status(404).json({message: 'No book found'})
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