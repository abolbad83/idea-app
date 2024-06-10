const express = require('express')
const ideaController = require('../controllers/ideaController')

const router = express.Router()

router.get('/', ideaController.idea_index)
router.post('/', ideaController.idea_create_post)
router.get('/create', ideaController.idea_create_get)
router.get('/:id', ideaController.idea_details ) 
router.delete('/:id', ideaController.idea_delete)
  

 
module.exports = router