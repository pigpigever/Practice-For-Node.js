/*
 * @Author: pigpigever 
 * @Date: 2017-09-02 12:07:26 
 * @Last Modified by: pigpigever
 * @Last Modified time: 2017-09-02 12:21:43
 */

var express = require('express')
var router = express.Router()
var db = require('../models/db')

router.get('/', function (req, res, next) {
    //插入数据
    db.insertOne('user', {'name': 'chensize', 'age': 22}, function (err, result) {
        if (err) {
            console.log(err)
            return
        }
        console.log('插入成功！！！')
    })
    //查找数据
    db.find('user', {'name': 'chensize','age':22}, function (err, result) {
        if(err){
            console.log(err)
            return
        }
        console.log(result)
    })
    res.render('index', {
        'title': 'gg'
    })
})

module.exports = router