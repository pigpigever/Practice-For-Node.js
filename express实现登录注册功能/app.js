let express = require('express'),
    index = require('./routes'),
    path = require('path'),
    app = express()

//静态化文件夹 : public文件夹和views文件夹
app.use(express.static(path.join(__dirname, 'views')))
app.use(express.static(path.join(__dirname, 'public')))

//设置模板引擎 ejs
app.set('view engine', 'ejs')

app.use('/', index)

app.listen(3000)