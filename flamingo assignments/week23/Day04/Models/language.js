const db = require('../database')
const sequelize = require('sequelize')



let Language = db.define('language', {
    english: {
        type: sequelize.BOOLEAN
    },
    gujarati: {
        type: sequelize.BOOLEAN
    },
    marathi: {
        type: sequelize.BOOLEAN
    },
    punjabi: {
        type: sequelize.BOOLEAN
    },
    hindi: {
        type: sequelize.BOOLEAN
    }

},
    {
        timestamps: false
    }
)



db.sync().then(res => {

})


module.exports = Language
