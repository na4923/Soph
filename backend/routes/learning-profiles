const express = require('express');
const router = express.Router();
const { feedbackFromLike, feedbackFromTextbox } = require('../controllers/learningProfileController');

router.post('/:id', feedbackFromLike);
router.post('/feedback/:id', feedbackFromTextbox);

module.exports = router;
