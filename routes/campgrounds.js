var express = require('express');
var router = express.Router();
var Campground = require('../models/campgrounds');
var flash = require('connect-flash');

router.get("/campgrounds",function(req,res){
    Campground.find({},function (err, allCampgrounds) {
        if(err){
            console.log(err);
        }else {
            res.render("campgrounds/campgrounds",{campgrounds:allCampgrounds});
        }
        
    })
    
}) 

router.post("/campgrounds",isLoggedin,function(req,res){
    var name= req.body.name ;
    var image = req.body.image;
    var desc = req.body.description;
    var price = req.body.price;
    var author = {
        id: req.user._id,
        username : req.user.username

    };
    var newCampground = {name: name ,price:price, image: image, description: desc, author:author};

    Campground.create(newCampground,function (err,newlyCreated) {

        if(err){
            console.log("An error occured..");
            console.log(err);

        } else{
            res.redirect("/campgrounds");        
        }
        
    })

    //campgrounds.push(newCampground);
    
})

//new

router.get("/campgrounds/new",isLoggedin,function(req,res){
    res.render("campgrounds/new");
})

//show
router.get("/campgrounds/:id",function(req,res){
    
    Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){

        if(err){
            console.log("err");
        } else{
            res.render("campgrounds/show",{campground:foundCampground});

        }
    })

})

//Edit Campground
router.get('/campgrounds/:id/edit',authUser,function(req,res){
   
        Campground.findById(req.params.id,function(err,foundCampground){
                 res.render('campgrounds/edit',{campground: foundCampground});
            });
        


    
});
//Update 
router.put('/campgrounds/:id/',authUser,function(req,res){
    Campground.findByIdAndUpdate(req.params.id, req.body.campground ,function(err,updatedCampground){
        if(err){
            res.redirect('/campgrounds');
            console.log(err)
        } else{
            res.redirect('/campgrounds/'+req.params.id);
        }
    } )
});

//Delete
router.delete('/campgrounds/:id',authUser,function(req,res){
    Campground.findByIdAndRemove(req.params.id,function(err){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else{
            res.redirect('/campgrounds');
        }
    })
});


//isloggedin
function isLoggedin(req,res,next){

    if(req.isAuthenticated()){
        return next();
    } 
    req.flash('error', 'You need to be logged in to do that');
    res.redirect('/login');
}

function authUser(req,res,next){
    if(req.isAuthenticated()){

        Campground.findById(req.params.id,function(err,foundCampground){
            if(err){
                console.log(err);
                res.redirect('back')
            } else{
                if(foundCampground.author.id.equals(req.user._id)){

                    next();
                } else{
                    req.flash('error', 'You dont have permission to do that');
                    res.redirect('back')
                }
            }
        });
        

    }else{
        req.flash('error', 'You need to be logged in to do that');
        res.redirect('back');

    }
}




module.exports = router;
