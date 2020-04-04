const db = require('../database')
const sequelize = require('sequelize')
const Award = require('./award')
const Language = require('./language')



let Singer = db.define('singer', {
    singer_name: {
        type: sequelize.STRING(25)
    },
    experience: {
        type: sequelize.INTEGER
    },
    classically_trained: {
        type: sequelize.BOOLEAN
    },
    singer_gender: {
        type: sequelize.STRING(10)
    }

},
    {
        timestamps: false
    }
)

Award.hasMany(Singer, { foreignKey: 'award_id' })
Singer.belongsTo(Award, { foreignKey: 'award_id' })


Language.hasMany(Singer, { foreignKey: 'language_id' })
Singer.belongsTo(Language, { foreignKey: 'language_id' })


db.sync().then(res => {

})


module.exports = Singer
