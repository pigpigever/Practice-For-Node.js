let mongoose = require('mongoose')
let connection = mongoose.connect('mongodb://localhost/test')

let userSchema = mongoose.Schema({
    name: String,
    age: Number
})
userSchema.methods.speak = function () {
    let greeting = this.name ? `Meow name is ${this.name}` : `I don't have a name`
    console.log(greeting)
}

let user = mongoose.model('user', userSchema)
let pgOne = new user({ name: '陈思泽' })

//存储数据
pgOne.save(function (err, pgOne) {
    if (err) {
        return console.error(err)
    }
    console.log(pgOne.name)
})
//删除数据
user.remove({ name: 'chensize' }, function (err) {
    if (err) {
        return handleError(err)
    }
})


