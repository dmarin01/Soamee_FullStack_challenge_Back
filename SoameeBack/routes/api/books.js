const router = require('express').Router();
const { getAllBooks } = require('../../models/books.model')

router.get('/', async (req, res) => {
    try {
        const rows = await getAllBooks();
        res.json(rows)
    } catch (err) {
        res.json({ error: err.massage })
    }
})

module.exports = router;