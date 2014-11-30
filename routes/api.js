var express = require('express');
var router = express.Router();
var skins = require('../modules/skins')

/* GET home page. */
router.get('/image/:username', function(req, res) {
  username = req.params.username
  skins.overlay(username, req.query.overlay, function(image) {
    console.log(username)
    res.writeHead(200, {
      'Content-Type': 'image/png'
    });
    res.end(image);
  });
});

router.get('/decode/:base64', function(req, res) {
  base64Data = Base64DecodeUrl(req.params.base64);
  base64Image = new Buffer(base64Data, 'base64');
  res.writeHead(200, {
    'Content-Type': 'image/png'
  });
  res.end(base64Image);

});

function Base64DecodeUrl(str){
    str = (str + '===').slice(0, str.length + (str.length % 4));
    return str.replace(/-/g, '+').replace(/_/g, '/');
}

module.exports = router;
