// backend/index.js

const express = require('express');    // 1
const cors = require('cors');          // 2

const app = express();                 // 3
const PORT = process.env.PORT || 5000; // 4

app.use(cors());                       // 5
app.use(express.json());               // 6

app.get('/api/ping', (req, res) => {   // 7
  res.json({ message: 'pong', time: new Date() }); // 8
});

app.post('/api/register',(req,res)=>{

  const{name,age} = req.body || {} ;

  const secretId = 'MIG-'+Math.random().toString(36).slice(2,9).toUpperCase();

  return res.json({message : 'registered',secretId,name:name ||null ,age:age||null});
});

app.listen(PORT, () => {               
  console.log(`Backend running on http://localhost:${PORT}`);
});
