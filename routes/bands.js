var express = require('express');
var router = express.Router();
const bandsController = require('../controllers/bandsController');


router.get('/', bandsController.index);

router.get('/id/:id', bandsController.showBand)

router.get('/genero/:genero', bandsController.showGender)

module.exports = router;
