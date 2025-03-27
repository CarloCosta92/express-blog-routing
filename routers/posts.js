const express = require ("express");
const router = express.Router();

//index
router.get('/', (req, res) => {
    res.send('Lista post')
})

//show
router.get('/:id', (req, res) => {
    res.send('Dettagli di un post')
})

//store
router.post('/', (req, res) => {
    res.send('Creazione di un post')
})

//update
router.put('/:id', (req, res) => {
    res.send('Modifica di tutti i post')
})


//destroy
router.delete('/:id', (req, res) => {
    res.send('Eliminazione di un post')
})

//esporto router
module.exports = router;