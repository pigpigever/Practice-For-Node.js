var express = require('express')
var router = express.Router()
var db = require('../models/db')

router.get('/', function (req, res, next) {
    db.insertOne('user', {'name': 'chensize','age':22}, function (err, result) {
        if (err) {
            console.log(err)
            return
        }
        console.log('插入成功！！！')
    })
    res.render('index', {
        'title': 'gg'
    })
})

module.exports = router