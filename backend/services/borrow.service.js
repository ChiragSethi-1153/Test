const Books = require("../model/books")
const Borrowed = require("../model/borrowed")
const Users = require("../model/users")

exports.createBorrower = async (req) => {
    try {
        const userId = req.id
        const { bookId } = req.body
        if (bookId) {

            const book = await Books.find({ _id: bookId })
            console.log(book.map((i) => i.quantity))
            let left = (book.map((i) => i.quantity))

            if (left[0] > 0) {
                const updateStock = await Books.findByIdAndUpdate(bookId, { quantity: left[0]-1 }, { new: true })
                console.log(updateStock)

                const borrower = await new Borrowed({
                    book: bookId,
                    borrower: userId
                }).populate({ path: 'borrower', select: 'name email role' })

                await borrower.save()
                console.log(borrower)
                return borrower
            }
            else {
                return 404
            }
        }
        else {
            return 404
        }

    } catch (err) {
        console.log(err)
        return err
    }
}

exports.editBorrower = async (req) => {
    try {
        const userId = req.id
        const { borrowId } = req.params
        const { bookId, status } = req.body

        const book = await Books.find({ _id: bookId })
        console.log(book.map((i) => i.quantity))
        let left = (book.map((i) => i.quantity))
        if (status === 'returned') {
            const updateStock = await Books.findByIdAndUpdate(bookId, { quantity: left[0]+1 }, { new: true })
            console.log(updateStock)

            const borrower = await Borrowed.findByIdAndUpdate(borrowId, { status: status }, { new: true })
            console.log(borrower)

            return borrower
        }


    } catch (err) {
        console.log(err)
        return err
    }
}

exports.getBorrowers = async(req) => {
    try {
        
        const userId = req.id
        const { status } = req.query
        if (status) {
                const borrowers = await Borrowed.find({ status: status }).sort({ createdAt: -1 })
                if(borrowers.length>0){
                    return borrowers
                }
                else{
                    return 404
                }
        }
        else {
            const borrowers = await Users.find({}).sort({ createdAt: -1 })
            if(borrowers.length>0){
                return borrowers
            }
            else{
                return 404
            }
        }


    } catch (err) {
        console.log(err)
        return err
    }
}