let express = require('express'),
    router = express.Router(),
    request = require('request');



router.get('/', (req, res) => {

    console.log('giphy URL hit');
    request.get("http://api.giphy.com/v1/gifs/search?q=logan paul&api_key=83fbe86921c645bab3cfb33e4c1a15af&limit=5", (err, response) => {
        console.log('back from the server with',response )
        res.send(response);
    })
        

    


});


module.exports = router;