# YelpCamp
>A Node.js web application project from the Udemy course - [The Web Developer Bootcamp](https://www.udemy.com/the-web-developer-bootcamp/)
## Project Demo
To view the live demo, go visit [https://zengsyelpcamp.herokuapp.com](https://frozen-temple-19127.herokuapp.com)
## Features
* Authentication:

  * User sign-up with username, password and other information
  
  * User login with username and password
  
  * Admin role sign-up with admin code
  
* Authorization:

  * User need to sign-up or login to create new post
  
  * User has no permission to edit or delete the posts, comments which are created by other users
  
  * Admin has permission to manage all the posts and comments
  
* Manage campground posts and comments with basic functionalities: 

  * Create, edit and delete campground posts and comments
  
  * Upload campground Image with multer and cloudinary
  
  * Create and edit price and description for a campground post
  
  * Display time since post was created with MomentJs
  
  * Display campground location with Google Maps
  
  * Search campground with Fuzzy Search
  
* Manage user account with basic functionalities:

  * Profile page information setup when sign-up
  
* Authentication flash messages for user interaction

* manage comments on the show page except

* Pagination on campgrounds index

## Build Tools
### Front-end
* [ejs](http://ejs.co/)
* [Bootstrap](https://getbootstrap.com/)
* [Google Maps API](https://cloud.google.com/maps-platform/)
### Back-end
* [async](http://caolan.github.io/async/)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [cloudinary](https://cloudinary.com/)
* [connect-flash](https://github.com/jaredhanson/connect-flash#connect-flash)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [express](https://expressjs.com/)
* [express-session](https://github.com/expressjs/session#express-session)
* [method-override](https://github.com/expressjs/method-override#method-override)
* [moment](https://momentjs.com/)
* [mongoose](https://mongoosejs.com/)
* [mongoDB](https://www.mongodb.com/)
* [multer](https://github.com/expressjs/multer)
* [node-geocoder](https://www.npmjs.com/package/node-geocoder)
* [passport](http://www.passportjs.org/)
* [passport-local](https://github.com/jaredhanson/passport-local#passport-local)
* [passport-local-mongoose](https://github.com/saintedlama/passport-local-mongoose)
### Platforms
* [Cloudinary](https://cloudinary.com/)
* [Cloud9](https://aws.amazon.com/cn/cloud9/?origin=c9io)
* [Heroku](https://dashboard.heroku.com/apps)
* [mLab](https://mlab.com/)
* [Google Maps API](https://cloud.google.com/maps-platform/)
