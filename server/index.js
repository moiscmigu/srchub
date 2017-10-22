require('dotenv').config({
    path:"./.env"
});


let express = require('express'),
    app = express(),
    path = require('path')
    tweet = require('./routes/tweets'),
    news = require('./routes/news'),
    bodyParser = require('body-parser'),
    youtube = require('./routes/youtube'),
    giphy = require('./routes/giphy');


let port = process.env.PORT || 2000;

//USES
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.use('/tweet', tweet);
app.use('/news', news);
app.use('/youtube', youtube);
app.use('/giphy', giphy);
//ROUTERS
app.get('/', (req, res) => {
    console.log('Main URL hit')
    res.sendFile(path.resolve('public/views/index.html'))
});






app.listen(port, () => {
console.log('server up on port:', port);
})
