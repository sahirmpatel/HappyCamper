var express = require("express");
var app = express();
var flash = require('connect-flash');
cors = require('cors');

var Campground = require('./models/campgrounds');
var Comment = require('./models/comments');
Activities = require('./models/activity');
var bodyParser =require("body-parser"), mongoose = require("mongoose");
var seedDB = require('./seeds');
var passport = require('passport'),
    localStrategy = require('passport-local')
    User = require('./models/users')
    methodOverride = require('method-override')


var commentRoutes = require('./routes/comments'),
    campgroundRoutes = require('./routes/campgrounds'),
    indexRoutes = require('./routes/index')



mongoose.connect("mongodb://localhost/happycamper",{ useNewUrlParser: true });
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;
app.use('/public', express.static('public'));
//flash
app.use(flash());

app.use(cors());

//seedDB();  SEEDING

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

//passport config
app.use(require('express-session')({
    secret:'this is the secret',
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//locals
app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    next();
})



app.use(indexRoutes);
app.use(commentRoutes);
app.use(campgroundRoutes);







app.listen(PORT, () => console.log(`Listening on ${ PORT }`))