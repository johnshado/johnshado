const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    let hoy = new Date(Date.now());
    res.render('index',{title:'Shadow John Web', year:hoy.getFullYear()});
})

//export router
module.exports = router;