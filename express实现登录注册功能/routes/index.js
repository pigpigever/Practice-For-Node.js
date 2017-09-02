let express = require('express'),
    router = express.Router(),
    db = require('../models/db')

router.get('/', (req, res, next) => {
    res.render('index')
})

router.get('/signUp', (req, res, next) => {
    res.render('signUp')
})

router.get('/doSignUp', (req, res, next) => {
    let password = req.query.password
    let user = req.query.user
    db.insertOne('user',{'name':user,'password':password},(err,result)=>{
        if(err){
            console.log(err)
            return
        }
    })
})

router.get('/logIn', (req, res, next) => {
    res.render('logIn')
})

module.exports = router