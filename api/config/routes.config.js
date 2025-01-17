const express = require('express');
const router = express.Router();
const phones = require('../controllers/phones.controllers');

router.get('/phones', phones.list);
router.get('/phones/:id', phones.detail);

module.exports = router;