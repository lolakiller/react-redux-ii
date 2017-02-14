'use strict';

const db = require('../db');
const DataTypes = db.Sequelize;
const Song = require('./song');

module.exports = db.define('genres', {
  genre: {
    type: DataTypes.STRING()
  }
}, {
  instanceMethods: {
    getSongsByGenre: function(){
      return genre.findAll({
        include: [{
          model: Song,
          through: {
            attributes : ['genreId', 'songId'],
            where: {songId: genreId}
          }
        }]
      });
    }
  }
}
);
