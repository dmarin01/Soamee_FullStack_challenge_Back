const router = require('express').Router();
const { getByIdAuthor, createAuthor } = require('../../models/author.model');

router.get('/:id', (req, res) => {
    getByIdAuthor(req.params.id)
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.json({ error: error.massage })
        });
});

router.post('/', (req, res) => {
    createAuthor(req.body)
        .then(result => {
            res.json(result)
        }).catch(err => {
            res.json({ error: err.massage })
        });
});



module.exports = router;