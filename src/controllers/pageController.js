"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | PhotoAPP
------------------------------------------------------- */
module.exports= {
    getIndexPage : (req,res) => {
        res.render("index")
    },
    
    getAboutPage : (req,res) => {
        res.render("about")
    }

}


