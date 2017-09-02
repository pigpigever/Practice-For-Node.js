let express = require('express');
app = express();

app.use(express.static(__dirname+'./public'))

app.use('/',index)

app.listen(3000);