const router = require('express').Router();
const { getAll } = require('../../models/authors.model')

router.get('/', async (req, res) => {
    try {
        const rows = await getAll();
        res.json(rows)
    } catch (err) {
        res.json({ error: err.massage })
    }
})

module.exports = router;