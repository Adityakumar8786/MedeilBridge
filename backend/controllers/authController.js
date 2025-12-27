const bcrypt = require("bcrypt");
const User = require("../models/User");

register = async(req,res)=>{
console.log("Body received:", req.body);
    try{
const {email,name,password} = req.body ; 



if(!name || ! email ||! password){
    return res.status(400).json({message: "All fields required" }); 
}


const isExisting = await User.findOne({email}) ; 

if (isExisting) {
      return res.status(409).json({ message: "User already exists" });
    }


const HashedPassword = await bcrypt.hash(password,10);

const user = await User.create({
    name,
      email,
      password: HashedPassword
}) ; 

res.status(201).json({
      message: "User registered successfully",
      userId: user._id
    });


    }catch(err){
res.status(500).json({ message: "Server error" });
    }
};


login = async(req,res)=>{

    try{
res.json({
    message: "Login successful",
    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role
    }
  });
    }catch(err){
console.log(err) ; 
    }
}

logout = (req, res) => {
  req.logout(() => {
    res.json({ message: "Logged out successfully" });
  });
};


module.exports = {register,login,logout} ; 
// module.exports = login ; 