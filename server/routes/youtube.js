let express = require('express'),
    router = express.Router();


    var YouTube = require('youtube-node');
    
    var youTube = new YouTube();
    
    youTube.setKey('AIzaSyBHQu4MdQ_J32BGf1-70LQTS4KcYgAzCcQ');
    
    


router.post('/', (req, res) => {

    console.log('youtube a hit');


    youTube.search(req.body.vids, 10, function(error, result) {
        if (error) {
          console.log(error);
        }
        else {
          console.log(JSON.stringify(result, null, 2));
          res.send(result);
        }
      });

    



});




module.exports = router;