const router = require('express').Router();
const { getByIdAuthor, createAuthor, updateAuthor } = require('../../models/author.model');

router.get('/:id', (req, res) => {
    getByIdAuthor(req.params.id)
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.json({ error: error.massage })
        });
});

router.post('/', async (req, res) => {
    try {
        const create = await createAuthor(req.body);
        res.json(create);
    } catch (err) {
        res.json({ error: err.massage })
    }
});


router.put('/:id', async (req, res) => {
    try {
        const update = await updateAuthor(req.params.id, req.body);
        res.json(update)
    } catch (err) {
        res.json({ error: err.massage })
    }
});



module.exports = router;