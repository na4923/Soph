const express = require('express');
const router = express.Router();
const { getFact, getFactFromQuestion } = require('../controllers/factController');

router.get('/:id', getFact);
router.get('/question/:id', getFactFromQuestion);

module.exports = router;

