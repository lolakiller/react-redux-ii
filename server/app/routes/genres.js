'use strict';

const express = require('express');
const mime = require('mime');
const router = express.Router();
const models = require('../../db/models');
const Genre = models.Genre;
const Songs = models.Song;
module.exports = router;


router.get('/:genreId', function(req, res, next){
  //res.json('Jello')
  Genre.findAll({
    where: {
      id : req.params.genreId
    }
  }).then(fetchedGenres => res.json(fetchedGenres.dataValues))
    .catch(next);
});


router.get('/:genreId/songs', function(req, res, next){
  Song.findAll({
    where: {
      genreId : req.params.genreId
    }
  }).then(fetchedGenres => res.json(fetchedGenres.dataValues))
    .catch(next);
});
