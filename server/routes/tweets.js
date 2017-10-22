let express = require('express'),
    router = express.Router();



const CONSUMERKEYTWIT = process.env.CONSUMERKEYTWIT;
const CONSUMERSECRETTWIT = process.env.CONSUMERSECRETTWIT;
const ACCESSTOKENTWIT = process.env.ACCESSTOKENTWIT;
const ACCESSTOKENSECRETTWIT = process.env.ACCESSTOKENSECRETTWIT;
    
let Twit = require('twit');

let T = new Twit({
    consumer_key:         CONSUMERKEYTWIT,
    consumer_secret:      CONSUMERSECRETTWIT,
    access_token:         ACCESSTOKENTWIT,
    access_token_secret:  ACCESSTOKENSECRETTWIT
    });




router.post('/', (req, res) => {
    
    let counter = Math.floor(Math.random() * 50)
    


    T.get('search/tweets', { q: req.body.tweet, count: counter }, function(err, data, response) {
        res.send(data.statuses);
    });


});




module.exports = router;