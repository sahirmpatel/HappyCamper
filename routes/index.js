var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/users');
var flash = require('connect-flash');

router.get("/",function(req,res){
    res.render("landing");
})



//===AUTH==

router.get('/register',function(req,res){
    res.render('register');
})

router.post('/register',function(req,res){
    var newUser = new User({username:req.body.username});
    User.register(newUser,req.body.password,function(err,user){
        if(err){

            req.flash('error',err.message);
            res.redirect('back');
            return res.render('register');
        }
        passport.authenticate('local')(req,res,function(){
            req.flash('success','Welcome to HappyCamper  '+user.username);
            res.redirect('/campgrounds');
        });
    });
});

//Login

router.get("/login",function(req,res){
    res.render('login');
})

router.post('/login',passport.authenticate('local',{
    successRedirect:'/campgrounds',
    failureRedirect:'/login'
}),function(req,res){

});


//logout
router.get('/logout',function(req,res){
    req.logout();
    req.flash("success","Logged out.")
    res.redirect('/campgrounds');
})

//isloggedin
function isLoggedin(req,res,next){
    if(req.isAuthenticated()){
        return next();
    } 
    req.flash('error', 'please log in first');

    res.redirect('/login');
}

module.exports = router;