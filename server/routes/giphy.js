let express = require('express'),
    router = express.Router(),
    request = require('request');



router.post('/', (req, res) => {

    console.log('giphy URL hit', req.body.search);
    request.get("http://api.giphy.com/v1/gifs/search?q=" + req.body.search + "&api_key=83fbe86921c645bab3cfb33e4c1a15af&limit=4", (err, response) => {

        res.send(response);
    }); //end of request

}); //end of post


module.exports = router;