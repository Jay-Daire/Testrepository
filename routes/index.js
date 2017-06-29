var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({}, {},function(e,docs){
    res.render('userlist', {
      "userlist" : docs
    });
  });
});

/* Get new user page.*/
router.get('/newuser', function(req, res) {
  res.render('newuser', {title: 'Add New User' });
});

/* POST command to the add user service */
router.post('/adduser', function(req, res) {

  //Sets internal DB variable
  var db = req.db;

  //Get form values
  var userName = req.body.username;
  var userEmail = req.body.usermail;

  //Set collection
  var collection = db.get('usercollection');

  //Submit to database
  collection.insert({
    "username" : userName,
    "email" : userEmail
  }, function (err, doc) {
    if (err) {
      //If fails, return error
      res.send("There was a problem adding the information to the database.");
    }
    else {
      //Forward to success page
      res.redirect("userlist");
    }
  });
}); */

module.exports = router;
