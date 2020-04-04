const db = require('../database')
const sequelize = require('sequelize')
const Award = require('./award')
const Movie = require('./movie')
const Genre = require('./genre')
const Language = require('./language')
const Singer = require('./singer')


let Songs = db.define('songs', {
    song_name: {
        type: sequelize.STRING(50)
    },
    song_length: {
        type: sequelize.FLOAT
    },
    song_release_year: {
        type: sequelize.INTEGER
    }

},
    {
        timestamps: false
    }
)

Award.hasMany(Songs, { foreignKey: 'award_id' })
Songs.belongsTo(Award, { foreignKey: 'award_id' })

Movie.hasMany(Songs, { foreignKey: 'movie_id' })
Songs.belongsTo(Movie, { foreignKey: 'movie_id' })

Genre.hasMany(Songs, { foreignKey: 'genre_id' })
Songs.belongsTo(Genre, { foreignKey: 'genre_id' })

Language.hasMany(Songs, { foreignKey: 'language_id' })
Songs.belongsTo(Language, { foreignKey: 'language_id' })

Singer.hasMany(Songs, { foreignKey: 'singer_id' })
Songs.belongsTo(Singer, { foreignKey: 'singer_id' })

db.sync().then(res => {

})


module.exports = Songs
