const router = require('express').Router();
const { getByIdBook, createBook, updateBook } = require('../../models/book.model');

router.get('/:id', (req, res) => {
    getByIdBook(req.params.id)
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.json({ error: error.massage })
        });
});

router.post('/', (req, res) => {
    createBook(req.body)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json({ error: err.massage })
        });
});

router.put('/:id', (req, res) => {
    updateBook(req.params.id, req.body)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json({ error: err.massage })
        });
});

module.exports = router;