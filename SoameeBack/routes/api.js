const router = require('express').Router();

//exporto las rutas
const apiAuthor = require('./api/author');
const apiBook = require('./api/book');
const apiAuthors = require('./api/authors');
const apiBooks = require('./api/books');


//Derivo las rutas
router.use('/authors', apiAuthors);
router.use('/author', apiAuthor);
router.use('/book', apiBook);
router.use('/books', apiBooks);



module.exports = router;