const router = require('express').Router();
const { getByIdAuthor } = require('../../models/author.model');

router.get('/:id', (req, res) => {
    getByIdAuthor(req.params.id)
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.json({ error: error.massage })
        })
})



module.exports = router;