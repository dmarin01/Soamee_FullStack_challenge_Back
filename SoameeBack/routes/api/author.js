const router = require('express').Router();
const { getById } = require('../../models/author.model');

router.get('/:id', (req, res) => {
    getById(req.params.id)
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.json({ error: error.massage })
        })
})



module.exports = router;