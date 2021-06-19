const router = require('express').Router();

//exporto las rutas
const apiAuthor = require('./api/author');
const apiBook = require('./api/book');


//Derivo las rutas
router.use('/authors', apiAuthor);
router.use('/book', apiBook);
router.use('/books', apiBook);



module.exports = router;