let express = require('express'),
    app = express(),
    path = require('path'),
    index = require('./routes/index')
//将public和views文件静态化
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'views')))
//设置模板引擎
app.set('view engine', 'ejs')

app.use('/', index)

app.listen(3000);