"use strict"
/* -------------------------------------------------------
    EXPRESSJS - PhotoAPP
------------------------------------------------------- */

const mongoose = require('mongoose')
// const passwordEncrypt = require('../helpers/passwordEncrypt')

const PhotoSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
    },

    description: {
        type: String,
        trim: true,
        required: true,
    },

    uploadedAt: {
        type: Date,
        default: Date.now()
    }

}, {
    collection: 'photos',
    timestamps: true
})

module.exports = mongoose.model('Photo', PhotoSchema)