let express = require('express'),
    app = express(),
    index = require('./routes/index'),
    path = require('path')
//将public和views文件静态化
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'views')))
//设置模板引擎
app.set('view engine', 'ejs')

app.use('/', index)

app.listen(3000);