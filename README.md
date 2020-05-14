# HappyCamper

HappyCamper is a project that was completed as a part of [Colt Steele's Web Development Bootcamp course (Udemy)](https://www.udemy.com/the-web-developer-bootcamp/learn/v4/overview).

## Description
HappyCamper is based on the popular Yelp.com , the difference being it focuses on the campgrounds that any host/owner can post for the users across the globe to check and review.

The application is hosted on heroku and can be accessed at the below web address  
https://the-happy-camper.herokuapp.com/

## Functionalities
- Everyone can view the camps and reviews without signing up or logging in.
- The user will have to login to edit the campground details or any comments.
- The user can only edit/delete the campgrounds and comments that they have added.
- All the data will pe persistent and is stored in the awazon cloud.

## Technologies Used:

- **HTML5**  - markup language for creating web pages and web applications  
- **CSS3**   - used for describing the presentation of a document written in a markup language  
- **Bootstrap** - free and open-source front-end web framework for designing websites and web applications quickly  
- **jQuery** - cross-platform JavaScript library designed to simplify the client-side scripting of HTML  
- **DOM Manipulation** - is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document  
- **Node.js** - pen-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side  
- **Express.js** - for building web applications and APIs and connecting middleware  
- **REST** - REST (REpresentational State Transfer) is an architectural style for developing web services  
- **MongoDB** - open-source cross-platform document-oriented NoSQL database program to store details like users info, campgrounds info and comments  
- **PassportJS** - authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application  
- **Data Associations** - associating user data with the respective campgrounds and comments using reference method  
- **Heroku** - cloud platform as a service used as a web application deployment model  
- **MongoDB Atlas** - mongodb is hosted on cloud.  



## Deployment:

- In the app.js use - > mongoose.connect('mongodb://localhost/yelp_camp'); (if mongodb is running on localhost).  
- I have used -> mongoose.connect(process.env.DATABASEURL); and have set DATABASEURL as environment variable in my heroku to maintain security.



 



