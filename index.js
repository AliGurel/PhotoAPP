 
"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | PhotoApp
------------------------------------------------------- */
const express = require('express')
const app = express()

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require('dotenv').config()
const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000

// asyncErrors to errorHandler:
require('express-async-errors')

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

/* ------------------------------------------------------- */
// Middlewares:

//Template Engine
app.set('view engine', 'ejs')

// Accept JSON:
app.use(express.json())

//static dosyaların yeri
app.use(express.static("public"));//burda join yerine resolve da kullanılabilir

// Call static uploadFile:
// app.use('/upload', express.static('./upload'))

// Check Authentication:
// app.use(require('./src/middlewares/authentication'))

// Run Logger:
// app.use(require('./src/middlewares/logger'))

// res.getModelList():
// app.use(require('./src/middlewares/findSearchSortPage'))

/* ------------------------------------------------------- */
// Routes:

// HomePath:
/*
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to Stock Management API',
        documents: {
            swagger: '/documents/swagger',
            redoc: '/documents/redoc',
            json: '/documents/json',
        },
        user: req.user
    })
})
*/

// Routes:
app.use(require('./src/routes'))

/* ------------------------------------------------------- */

// errorHandler:
// app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, HOST, () => console.log(`Server Runned on http://${HOST}:${PORT}`))