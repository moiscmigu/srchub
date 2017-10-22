let express = require('express'),
    router = express.Router();

const YOUTUBESETKEY = process.env.YOUTUBESETKEY;

let YouTube = require('youtube-node');

let youTube = new YouTube();

youTube.setKey(YOUTUBESETKEY);
    
    


router.post('/', (req, res) => {

    console.log('youtube a hit');


    youTube.search(req.body.vids, 10, function(error, result) {
        if (error) {
          console.log(error);
        }
        else {
          res.send(result);
        }
      });
});




module.exports = router;