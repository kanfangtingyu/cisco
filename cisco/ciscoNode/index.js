const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const db = 'mongodb://localhost/cisco';
const sr = require('./router');

// 使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// 连接mongodb
mongoose
    .connect(
        db, { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


// 配置跨域
app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);
    else
        next();
});
app.use('/api/srs', sr);
const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});