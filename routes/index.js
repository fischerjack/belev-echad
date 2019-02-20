const express = require('express');
const router = express.Router();

const soldiers2019 = require('../bin/soldierData2019');
const soldiers2018 = require('../bin/soldierData2018');

router.get('/', (req, res, next) => {
  res.render('index', {soldiers2019, soldiers2018});
});

module.exports = router;