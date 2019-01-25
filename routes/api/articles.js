var express = require('express');
var router = express.Router();

   //Request that returns all user record
var Articles = require('../../models/articles');

router.get('/', function(req, res, next) {

  Users.find({},function(err, articles){

    if(err){
     return res.json({'success':false, 'error': err});
   }

    return res.json({'success':true, 'users': articles});
  });

});

router.get('/', function(req, res, next) {
  res.json({success: true});
});
  //
router.get('/:articleId', function(req,res){

  //Request that returns one user record

  var userId = req.params.userId;
   Users.findOne({'_slugid':userId}, function(err, articles){
     if(err){
      return res.json({'success':false, 'error': err});
    }
     return res.json({'success':true, 'article': article});
   });

 });

    //Post - Notes new user info form users.app.js
 router.post('/', function(req, res) {
  Articles.create(new Articles({
    username: req.body.username,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name
  }), function(err, article){

    if(err){
      return res.json({success: false, user: req.body, error: err});
    }

    return res.json({success: true, user: article});

  });

});

  //PUT
router.put('/', function(req, res){

  Articles.findOne({'_slugid': req.body._slugid}, function(err, article){

   if(err) {
     return res.json({success: false, error: err});
   }else if (article) {

    let data = req.body;

    if(data.articlename){
      article.articlename = data.articlename;
    }

    if(data.email){
    user.email = data.email;
    }

    if(data.first_name){
    user.first_name = data.first_name;
    }

    if(data.last_name){
    user.last_name = data.last_name;
    }

    article.save(function(err){
      if(err){
        return res.json({success: false, error: err});
      }else{
        return res.json({success: true, user:article});
      }
    });

   }

  });

});

  //Delete
router.delete('/:articleId', function(req,res){

  var articleId = req.params.articleId;

  Articles.remove({'_id':articleId}, function(err,removed){

    if(err){
      return res.json({success: false, error: err});
    }

    return res.json({success: true, status: removed});

  });

});

module.exports = router;
