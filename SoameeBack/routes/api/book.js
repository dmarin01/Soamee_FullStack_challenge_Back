const router = require('express').Router();


router.get('/', (req, res) => {
    res.json('funciona')
})



module.exports = router;