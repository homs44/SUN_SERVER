var express = require('express');
var dao = require('../database/index');
var async = require('async');
var router = express.Router();

/* GET home page. */
router.post('/login', function(req, res, next) {

    var userid = req.body.userid;
    var password = req.body.password;
    var jsonResult = {
        code:-1
    };

    async.waterfall(
        [
            function(callback){
             dao.processQuery(dao.sql.user.login,[userid,password],callback);
            },
        ],function(err,result){
            if(err){
                jsonResult.code = 400;
                jsonResult.error = err;

            }else{
                if(result.length !=0){
                    jsonResult.code = 200;
                    jsonResult.result = result;
                }else{
                    jsonResult.code = 300;
                }
            }
            res.json(jsonResult);
        }
    )
});

module.exports = router;
