const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
/* add routes later */
//const authRoutes = require('')
//const homeRoutes = require('')
//const todoRoutes = require('')

/*connect passport config*/
require("dotenv").config({path:"../config/.env"});

//DB connect
connectDB();

//engine for views
app.set("view engine", "jsx");//
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json);
app.use(methodOverride("_method"));
app.use(logger(dev));
app.use(flash());
/*sessions*/
app.use(
    session({
      secret: 'dark magic',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  );
//passport & middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

/*ROUTING*/
/*
app.use("/", homeRoutes,)
app.use('/auth', authRoutes)
app.use('/', Routes)
*/


//app listening 
app.listen(process.env.PORT, () => {
  console.log("the server is running")
});






