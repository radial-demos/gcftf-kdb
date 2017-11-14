'use strict';

const { Router } = require('express');

const site = require('./site');

const router = Router();

router.get('/:viewId?/:nationId?/:jurisdictionId?', site);

module.exports = router;
