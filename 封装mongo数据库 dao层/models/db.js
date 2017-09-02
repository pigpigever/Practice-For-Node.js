/*
 * @Author: pigpigever 
 * @Date: 2017-09-02 10:57:23 
 * @Last Modified by: pigpigever
 * @Last Modified time: 2017-09-02 20:27:55
 */
let MongoClient = require('mongodb').MongoClient,
    assert = require('assert')


/**
 * @param {function} callback 
 */
function _connectDB(callback) { //链接数据库
    let url = 'mongodb://localhost:27017/test'
    MongoClient.connect(url, (err, db) => {
        if (err) {
            callback(err, null)
        }
        callback(null, db)
    })
}

/**
 * @param {string} collectionName
 * @param {Object} newData
 * @param {function} callback
 * @return {void}
 */
exports.insertOne = (collectionName, newData, callback) => {    //插入一条数据
    _connectDB((err, db) => {
        let col = db.collection(collectionName)
        col.insertOne(newData, function (err, result) {
            callback(err, result)
            db.close()
        })
    })
}

/**
 * @param {string} collectionName
 * @param {object} data
 * @param {function} callback
 * @return {object []}
 */
exports.find = (collectionName, data, callback) => {           //查找数据
    _connectDB((err, db) => {
        let collection = db.collection(collectionName)
        collection.find().toArray((err, docs) => {
            callback(null, docs)
            db.close()
        })
    })
}

exports.deleteOne = (collectionName, data, callback) => {      //删除一条数据
    _connectDB((err, db) => {
        let collection = db.collection(collectionName)
        collection.deleteOne(data)
        callback(null)
        db.close()
    })
}