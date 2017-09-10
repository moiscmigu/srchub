let express = require('express'),
    router = express.Router(),
    request = require('request');



router.post('/', (req, res) => {
   
    console.log('hello', req.body.news);
    let news = req.body.news;
    request.get({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        qs: {
          'api-key': "91a40969c2094a5abea86ce33aa94e89",
          'q': news
        },
      }, function(err, response, body) {
        body = JSON.parse(body);
        console.log(body);
        res.send(body);
      })
    
});


module.exports = router;