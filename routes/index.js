var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
var models = require('../models');

/* GET home page. */
router.get('/albums', function(req, res, next) {
  models.albums.findAll({}).then(albumsFound => {
    res.render('albums', {
      albums: albumsFound
    });
  });
});

module.exports = router;
