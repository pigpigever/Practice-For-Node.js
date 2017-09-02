/*
 * @Author: pigpigever 
 * @Date: 2017-09-02 12:07:26 
 * @Last Modified by: pigpigever
 * @Last Modified time: 2017-09-02 20:25:41
 */

var express = require('express')
var router = express.Router()
var db = require('../models/db')

router.get('/', function (req, res, next) {

    let promise = new Promise((resolve, reject) => {
        db.insertOne('user', {'name': '陈思泽','age': 22}, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('插入成功！！！')
        })
        resolve()
    })
    promise.then(() => {
        db.deleteOne('user', {'name': '陈思泽','age': 22}, () => {
            console.log('删除成功！！！')
        });
    })
    //查找
    db.find('user', {'name': '陈思泽','age': 22}, (err, result) => {
        if (err) {
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