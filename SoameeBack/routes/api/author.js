const router = require('express').Router();


router.get('/:id', (req, res) => {
    res.json('funciona author')
})



module.exports = router;