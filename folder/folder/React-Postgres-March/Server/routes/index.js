var express = require('express');
var router = express.Router();

router.use('/order', require('./ordersRoute'))
router.use('/menu', require('./menuRoute'))
router.use('/table', require('./tablesRoute'))
router.use('/waiter', require('./waitersRoute'))

module.exports = router;
