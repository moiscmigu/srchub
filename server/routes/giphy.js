let express = require('express'),
    router = express.Router(),
    request = require('request');



router.get('/', (req, res) => {

    console.log('giphy URL hit');

    res.send('the giphy');


});


module.exports = router;