const router = require('express').Router();
const { getAllAuthors } = require('../../models/authors.model')

router.get('/', async (req, res) => {
    try {
        const rows = await getAllAuthors();
        res.json(rows)
    } catch (err) {
        res.json({ error: err.massage })
    }
})

module.exports = router;