var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware");
var Campground = require("../models/campground");


//root route
router.get("/", function(req, res){
   res.render("landing");
});

// Upload Inmage
var multer = require('multer');
var storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
var imageFilter = function (req, file, cb) {
    // accept image files only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
var upload = multer({ storage: storage, fileFilter: imageFilter})

var cloudinary = require('cloudinary');
cloudinary.config({ 
  cloud_name: 'dcliv8off', 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// =============
// AUTH ROUTES
// =============

//show the register form
router.get("/register", function(req, res) {
   res.render("register", {page: 'register'}); 
});
//handle sign up logic
router.post("/register", upload.single('image'), function(req, res) {
    cloudinary.uploader.upload(req.file.path, function(result) {
        var newUser = new User(
        {
            username: req.body.username, 
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            avatar: result.secure_url
        });
    if(req.body.adminCode === process.env.ADMIN_SECRET){
        newUser.isAdmin = true;
    }
    User.register(newUser,req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register", {error: err.message});
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to YelpCamp, " + user.username +"!");
            res.redirect("/campgrounds");
        });
    });
    });
    
});

//show login form

router.get("/login", function(req, res) {
    res.render("login", {page: 'login'});
});

router.post("/login", passport.authenticate("local", 
        {
            successRedirect: "/campgrounds",
            failureRedirect: "/login"
        }), function(req, res){
});

// logout route
router.get("/logout", function(req, res){
  req.logout();
  req.flash("success", "Logged you out!");
  res.redirect("/campgrounds");
});

// USERS PROFILES
router.get("/users/:id", function(req, res) {
   User.findById(req.params.id, function(err, foundUser){
      if(err || !foundUser){
          req.flash("error", "Something went wrong.");
          return res.redirect("/");
      }
      Campground.find().where('author.id').equals(foundUser._id).exec(function(err, campgrounds){
         if(err){
             req.flash("error", "Something went wrong.");
             res.redirect("/")
         }
         res.render("users/show", {user: foundUser, campgrounds: campgrounds});
      });
      
   }); 
});


//middle ware

module.exports = router;