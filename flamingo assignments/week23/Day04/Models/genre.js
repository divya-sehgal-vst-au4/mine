const db = require('../database')
const sequelize = require('sequelize')



let Genre = db.define('genre', {
    classical: {
        type: sequelize.BOOLEAN
    },
    rock: {
        type: sequelize.BOOLEAN
    },
    dubstep: {
        type: sequelize.BOOLEAN
    },
    country: {
        type: sequelize.BOOLEAN
    }

},
    {
        timestamps: false
    }
)



db.sync().then(res => {

})


module.exports = Genre
