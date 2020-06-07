const db = require('../database')
const sequelize = require('sequelize')



let Award = db.define('awards', {
    IIFA_Award: {
        type: sequelize.BOOLEAN
    },
    Mirchi_Award: {
        type: sequelize.BOOLEAN
    },
    Oscar_Award: {
        type: sequelize.BOOLEAN
    },
    Filmfare_Award: {
        type: sequelize.BOOLEAN
    },
    National_Award: {
        type: sequelize.BOOLEAN
    }

},
    {
        timestamps: false
    }
)



db.sync().then(res => {

})


module.exports = Award
