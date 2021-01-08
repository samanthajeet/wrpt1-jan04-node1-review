const express = require('express');
const app = express();

app.use(express.json());

//book endpoints
const bookCtrl = require('./bookCtrl')
app.get('/api/books', bookCtrl.getAllBooks)
app.get('/api/books/:id', bookCtrl.getBook)
app.post('/api/books', bookCtrl.addBook)
app.delete('/api/books/:id', bookCtrl.deleteBook)



const port = 5555
app.listen(port, () => console.log(`bingpot on port ${port}`))