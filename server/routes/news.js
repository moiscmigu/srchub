let express = require('express'),
    router = express.Router(),
    request = require('request');



router.get('/', (req, res) => {
   
    console.log('hello');
    request.get({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        qs: {
          'api-key': "91a40969c2094a5abea86ce33aa94e89",
          'q': "batman"
        },
      }, function(err, response, body) {
        body = JSON.parse(body);
        console.log(body);
        res.send(body);
      })
    
});


module.exports = router;