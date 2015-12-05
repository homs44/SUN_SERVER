/**
 * Created by pc on 2015-12-05.
 */
var mysql = require('mysql');

var pool = mysql.createPool({
    host:'localhost',
    port:3306,
    user:'root',
    password:'gnb87841',
    database:'sun',
    connectionLimit:3,
    waitForConnections:false,
});

exports.sql = {
    user:{
        add:'insert into user(userid,password,created) values(?,?,?)',
        select_by_userid:'select * from user where userid = ?',
        select_by_c_userid:'select * from user where c_userid = ?',
        select_all:'select * from user',
        login:'select c_userid from user where userid = ? and password = ?'
    },
    seat:{
        add:'insert into seat(num,for_c_userid,time_start,time_end,cnt_extend) values(?,?,?,?,?)'
    }
};

exports.processQuery = function(sql,data,callback){

    pool.getConnection(function(err,connection){
        connection.query(sql,data,function(err,rows){
           connection.release();
            callback(err,rows);
        });
    })
};

