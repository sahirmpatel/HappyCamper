var express = require('express');
var router = express.Router();
var Campground = require('../models/campgrounds');
var Comment = require('../models/comments')
//====Comment routes====//
router.get('/campgrounds/:id/comments/new',isLoggedin,function(req,res){
    Campground.findById(req.params.id , function(err,campground){
        if(err){
            console.log(err)
        } else{
            res.render('comments/new',{campground:campground})
        }
    })
      
  })
  
  router.post("/campgrounds/:id/comments",isLoggedin,function(req,res){
      Campground.findById(req.params.id, function(err,campground){
          if(err){
              res.send(err)
          } else{
              Comment.create(req.body.comment , function(err,comment){
                  if(err){
                      res.render(err)
                  } else{
                
                     comment.author.id = req.user._id;
                     comment.author.username = req.user.username;
                     comment.save();
                      campground.comments.push(comment);
                      campground.save();
                      req.flash('succes','Successfully added comment')
                      res.redirect('/campgrounds/'+ campground._id)
                  }
              })
          }
      })
  })
  

//isloggedin
function isLoggedin(req,res,next){
    if(req.isAuthenticated()){
        return next();
    } 
    req.flash('error','Please log in to comment')
    res.redirect('/login');
}

  
module.exports = router;
