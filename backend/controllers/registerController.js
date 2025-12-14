const registerPatient = (req,res) =>{

    const {name , age} = req.body || {} ; 
     const secretId =
    "MIG-" + Math.random().toString(36).slice(2, 9).toUpperCase();

  return res.json({
    message: "registered",
    secretId,
    name: name || null,
    age: age || null,
  });
}

module.exports = {registerPatient} ;