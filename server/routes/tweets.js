let express = require('express'),
    router = express.Router();

let Twit = require('twit');

let T = new Twit({
    consumer_key:         'swwVChp2pR7kl5Ay8ELWq4UVR',
    consumer_secret:      'WDtiBqEXsfnb6YCdWEIzhFPSijAdpmcOr14DEeHEfV1AYJ6aQ5',
    access_token:         '905539359117541377-IRuKv5bJJ9nwU8jsXo43erbfRpnKyLl',
    access_token_secret:  'nSMDG6pZEDvHhTsNqtXDhTahGTh4ecmgpL1xgPyIjw750'
    });




router.get('/', (req, res) => {
    
    let counter = Math.floor(Math.random() * 50)
    console.log(counter);
    


    T.get('search/tweets', { q: 'batman', count: counter }, function(err, data, response) {
        res.send(data.statuses);
    });


});




module.exports = router;