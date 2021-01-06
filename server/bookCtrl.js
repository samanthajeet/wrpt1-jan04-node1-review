const data = require('../data.json')
module.exports = {
    getAllBooks: (req, res) => {
        const { genre } = req.query;
        let books = data;
        if(genre){
            books = books.filter(element => element.genre === genre)
        }
        res.status(200).send(books)
    },
    getBook: (req, res) => {
        const { id } = req.params;
        const foundBook = data.find( element => element.id === +id)
        if(foundBook){
            res.status(200).send(foundBook)
        } else {
            res.status(404).send('No book found')
        }
    }
}