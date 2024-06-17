"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | StockAPI
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/photo:

const photo = require('../controllers/photoController')
// const permissions = require('../middlewares/permissions')

// URL: /photos

//Kısaltılmış Route yapısı;
/*
router.route('/(:id)?')
    .post(permissions.isAdmin, photo.create)
    .get(permissions.isStaff, photo.read)
    .put(permissions.isAdmin, photo.update)
    .patch(permissions.isAdmin, photo.update)
    .delete(permissions.isAdmin, photo.delete)
*/
//Kısaltılmış Route yapısı;
router.route('/(:id)?')
    .post(photo.create)
    .get(photo.read)
    .put(photo.update)
    .patch(photo.update)
    .delete(photo.delete)

/* ------------------------------------------------------- */
module.exports = router