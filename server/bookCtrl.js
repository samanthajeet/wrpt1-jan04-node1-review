const data = require('../data.json')
let id = data.length + 1
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
    },
    addBook: (req, res) => {
        console.log(req.body)
        const { title, author, year, cover, genre } = req.body;
        const newBook = {
            id: id, 
            author: author,
            title,
            year,
            cover,
            genre
        }
        data.push(newBook)
        id++
        res.status(200).send(data)
    },
    deleteBook: (req, res) => {
        const { id } = req.params;
        let index = data.findIndex( element => element.id === +id)
        if(index === -1){
            res.status(404).send('No book with that id found')
        }
        data.splice(index, 1)
        res.status(200).send(data)
    }
}