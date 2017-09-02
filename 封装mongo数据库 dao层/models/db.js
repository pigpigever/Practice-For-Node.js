/*
 * @Author: pigpigever 
 * @Date: 2017-09-02 10:57:23 
 * @Last Modified by: pigpigever
 * @Last Modified time: 2017-09-02 11:54:04
 */
var MongoClient = require('mongodb').MongoClient,
    test = require('assert');


/**
 * @param {function} callback 
 */
function _connectDB(callback) {
    //链接数据库
    var url = 'mongodb://localhost:27017/test';
    MongoClient.connect(url, function (err, db) {
        if (err) {
            callback(err, null)
        }
        callback(err, db)
    });
}

/**
 * @param {string} collectionName
 * @param {object} newData
 * @param {function} callback
 */
exports.insertOne = function (collectionName, newData, callback) {
    _connectDB(function (err, db) {
        var col = db.collection(collectionName);
        col.insertOne(newData, function (err, result) {
            callback(err, result)
            db.close();
        })
    })
}

exports.find = function (collectionName, ) {
    _connectDB(function (err, db) {
        var collection = db.collection(collectionName)
    })
}