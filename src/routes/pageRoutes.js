"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | PhotoAPP
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/:
const {getIndexPage, getAboutPage} = require('../controllers/pageController')
// const permissions = require('../middlewares/permissions')


// URL: /
router.route('/')
    .get(getIndexPage)
// URL: /about
router.route('/about')
    .get(getAboutPage)

/* ------------------------------------------------------- */
module.exports = router