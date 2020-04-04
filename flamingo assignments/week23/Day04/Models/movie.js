const db = require('../database')
const sequelize = require('sequelize')



let Movie = db.define('movie', {
    movie_name: {
        type: sequelize.STRING(30)
    }

},
    {
        timestamps: false
    }
)



db.sync().then(res => {

})


module.exports = Movie
