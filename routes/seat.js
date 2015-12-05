/**
 * Created by pc on 2015-12-05.
 */
var express = require('express');
require('date-util');
var router = express.Router();

/* GET users listing. */
router.post('/start', function (req, res, next) {

    var c_userid = req.body.c_userid;
    var num = req.body.num;
    var time_start = req.body.time_start;
    var time_end = req.body.time_end;
    var cnt_extend = 0;

    var jsonResult = {
        code: -1
    };

    async.waterfall(
        [
            function (callback) {
                dao.processQuery(dao.sql.seat.add, [num, c_userid, time_start,time_end,cnt_extend], callback);
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
});

router.post('/extend', function (req, res, next) {

    var c_userid = req.body.c_userid;
    var num = req.body.num;

    var cnt_extend = 0;

    var jsonResult = {
        code: -1
    };

    async.waterfall(
        [
            function (callback) {
                dao.processQuery(dao.sql.seat.add, [num, c_userid, time_start,time_end,cnt_extend], callback);
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
});

module.exports = router;
