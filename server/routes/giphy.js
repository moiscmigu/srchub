let express = require('express'),
    router = express.Router(),
    request = require('request');

const GIPHYAPIKEY = process.env.GIPHYAPIKEY;



router.post('/', (req, res) => {

    console.log('giphy URL hit', req.body.search);
    request.get("http://api.giphy.com/v1/gifs/search?q=" + req.body.search + "&api_key=" + GIPHYAPIKEY + "&limit=6", (err, response) => {

        res.send(response);
    }); //end of request

}); //end of post


module.exports = router;