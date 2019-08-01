var express = require('express');
var JWT = require('jsonwebtoken');
var router = express.Router();
var secret = require('../server/server.config').JWT_config.secret;
var algorithm = require('../server/server.config').JWT_config.algorithm;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST . */
router.post('/check', function(req, res, next) {
 let { uname,pwd } = req.body;

  console.log(uname);
  console.log(pwd);

  // 验证是否有该用户
  if( uname === 'zs' && pwd === '123') {
    //res.send('ok')
    let token = JWT.sign(
      {
        uname: uname,
        exp: Date.now() + 1000 * 60
      },
      secret,
      { algorithm }
    )
    console.log("token:" + token)
    res.send(token)
  } else {
    res.send('error')
  }
});

module.exports = router;
