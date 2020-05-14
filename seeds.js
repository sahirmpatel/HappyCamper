var mongoose = require('mongoose');
var Campground = require('./models/campgrounds');
var Comment =  require('./models/comments')


var data = [
    {
        name:"Cloud rest",
        image:"https://images.unsplash.com/photo-1503542149301-75886cd3030c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum aspernatur, deserunt eos omnis cumque, culpa iusto excepturi optio et voluptatibus, dicta harum accusamus. Quaerat beatae eum maxime commodi necessitatibus ratione!"

    },
    {
        name:"Canyon floor",
        image:"https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",  
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum aspernatur, deserunt eos omnis cumque, culpa iusto excepturi optio et voluptatibus, dicta harum accusamus. Quaerat beatae eum maxime commodi necessitatibus ratione!"

    },
    {
        name:"Great Lake",
        image:"https://images.unsplash.com/photo-1497900304864-273dfb3aae33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum aspernatur, deserunt eos omnis cumque, culpa iusto excepturi optio et voluptatibus, dicta harum accusamus. Quaerat beatae eum maxime commodi necessitatibus ratione!"
    }
]


function seedDB(){
    //removing 
    Campground.remove({},function(err){
     /*   if(err){
            console.log(err);
        } else {
            console.log('deleted all');
        }
        });

    ///adding camps

    data.forEach(function(seed){
        Campground.create(seed,function(err,campground){
            if(err){
                console.log(err);
            } else {
                console.log('added all');
                 //comments
                 Comment.create({
                    text:'i really like this place',
                    author:'sahir'
            
                },function(err,comment){
                    if(err){
                        console.log(err);
                    } else {
                        campground.comments.push(comment);
                        campground.save();
                        console.log('added comments');
                    }
                })
                
                

            }
        })*/
    });

   
}

module.exports = seedDB
    
