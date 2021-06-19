const router = require('express').Router();
const { getByIdBook } = require('../../models/book.model');

router.get('/:id', (req, res) => {
    getByIdBook(req.params.id)
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.json({ error: error.massage })
        })
})



module.exports = router;