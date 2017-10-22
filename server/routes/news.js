let express = require('express'),
    router = express.Router(),
    request = require('request');

const NEWYORKAPIKEY = process.env.NEWYORKAPIKEY;




router.post('/', (req, res) => {
   
    console.log('hello', req.body.news);
    let news = req.body.news;
    request.get({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        qs: {
          'api-key': NEWYORKAPIKEY,
          'q': news
        },
      }, function(err, response, body) {
        body = JSON.parse(body);
        res.send(body);
      })
    
});


module.exports = router;