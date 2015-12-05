var express = require('express');
require('date-util');
var router = express.Router();

/* GET users listing. */
router.post('/join', function (req, res, next) {
    var userid = req.body.userid;
    var password = req.body.password;
    var created = new Date();
    var jsonResult = {
        code: -1
    };

    async.waterfall(
        [
            function (callback) {
                dao.processQuery(dao.sql.user.add, [userid, password, created], callback);
            },
        ], function (err, result) {
            if (err) {
                jsonResult.code = 400;
                jsonResult.error = err;

            } else {
                jsonResult.code = 200;
            }
            res.json(jsonResult);
        }
    )

    res.render('index', {title: 'Express'});


});


module.exports = router;
