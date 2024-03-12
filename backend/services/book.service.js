const Books = require("../model/books");
const Users = require("../model/users");


exports.addBook = async (req) => {
    try {
        console.log(req.body)
        const userId = req.id
        console.log(userId)

        const admin = await Users.find({ _id: userId })
        console.log(admin)
        
        const role = admin.map((i) => i.role)
        console.log(role[0])

        if (role[0] === 'admin') {

            const { title, author, quantity, genre } = req.body

            let newImage = [];
            if (req.files !== null && req.files.images && req.files.images.length > 0) {
                newImage = req.files.images.map((i) => {
                    return i.path;
                });
                console.log(newImage, "ghvugyiv");
            }

            const book = await new Books({
                title,
                author,
                genre,
                quantity,
                coverImage: newImage
            })
            await book.save()
            console.log(book)

            return book
        }
        else {
            const response = 401
            return response
        }

    } catch (err) {
        console.log(err)
        return err
    }
}


exports.editBook = async (req) => {
    try {
        const userId = req.id
        console.log(userId)
        const admin = await Users.find({ _id: userId })
        console.log(admin)
        const role = admin.map((i) => i.role)
        console.log(role[0])

        if (role[0] === 'admin') {
            const { bookId } = req.params
            const { title, author, quantity, genre } = req.body

            let newImage = [];
            if (req.files !== null && req.files.images && req.files.images.length > 0) {
                newImage = req.files.images.map((i) => {
                    return i.path;
                });
                console.log(newImage, "ghvugyiv");
            }

            const book = await Books.findByIdAndUpdate(bookId, {
                title,
                author,
                genre,
                quantity,
                // coverImage: newImage
            },
                { new: true }
            )

            console.log(book)

            return book
        }
        else {
            const response = 401
            return response
        }
    } catch (err) {
        console.log(err)
        return err
    }
}

exports.deleteBook = async (req) => {
    try {
        const userId = req.id
        console.log(userId)
        const admin = await Users.find({ _id: userId })
        console.log(admin)
        const role = admin.map((i) => i.role)
        console.log(role[0])

        if (role[0] === 'admin') {
            const { bookId } = req.params

            const book = await Books.findByIdAndDelete(bookId)

            console.log(book)

            return book
        }
        else {
            const response = 401
            return response
        }
    } catch (err) {
        console.log(err)
        return err
    }
}

exports.getAllBooks = async (req) => {
    try {
        const userId = req.id
        console.log(userId)

        const books = await Books.find({}).sort({ createdAt: -1 })
        return books

    } catch (err) {
        console.log(err)
        return err
    }
}

exports.searchBooks = async (req) => {
    try {
        const userId = req.id
        console.log(userId)
        const { body } = req.query
        const books = await Books.find({ "$or": [{ "title": { $regex: ".*" + body + ".*", $options: 'i' } }, { "author": { $regex: ".*" + body + ".*", $options: 'i' } }, { "genre": { $regex: ".*" + body + ".*", $options: 'i' } }] })

        if (books.length > 0) {
            return books
        }
        else {
            return 404
        }


    } catch (err) {
        console.log(err)
        return err
    }
}