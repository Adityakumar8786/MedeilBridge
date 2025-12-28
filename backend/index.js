// backend/index.js

const express = require('express');    // 1
const cors = require('cors');          // 2
const registerRoutes = require("./routes/registerRoutes"); 
const connectDB = require("./config/db");
const session = require("express-session");
const{ MongoStore }= require("connect-mongo");
const cookieParser = require("cookie-parser");
const flash = require("express-flash");
const passport = require("passport");
require("./config/passport")(passport);
const authenticationroute = require("./routes/authRoutes") ; 
const statsRoutes = require("./routes/statsRoutes");

const app = express();                 // 3
const PORT = process.env.PORT || 5000; // 4

app.use(cors());                       // 5
app.use(express.json());               // 6
app.use(express.urlencoded({ extended: true }));






app.use(session({
  name:"medilbridge.sid",
  secret : process.env.SESSION_SECRET , 
  resave : true , 
  saveUninitialized : false , 
  store: new MongoStore({
  mongoUrl : process.env.MONGO_URI
  }),

  cookie :{
    httpOnly : true , 
    maxAge : 1000 * 60 * 60 * 24 
  }
 }));


 app.use(flash()) ; 

app.use(passport.initialize());
app.use(passport.session());

connectDB();

app.get('/api/ping', (req, res) => {   // 7
    req.session.visits = (req.session.visits||0)+1 ;

  res.json({ message: 'pong', 
    visits:req.session.visits,
    flash : req.flash() ,
    time: new Date() }); // 8
});

app.post("/api/flash-test",(req,res)=>{

  req.flash("info", "Flash message is working");
  req.flash("error", "Something went wrong");
req.flash("error", "Invalid password");
  res.json({status:"flash set"}) ; 
})

app.use("/api",registerRoutes);
app.use("/api/auth",authenticationroute) ; 
app.use("/api", statsRoutes);

app.listen(PORT, () => {               
  console.log(`Backend running on http://localhost:${PORT}`);
});
