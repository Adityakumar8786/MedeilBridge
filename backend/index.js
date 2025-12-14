// backend/index.js

const express = require('express');    // 1
const cors = require('cors');          // 2

const app = express();                 // 3
const PORT = process.env.PORT || 5000; // 4

app.use(cors());                       // 5
app.use(express.json());               // 6

const registerRoutes = require("./routes/registerRoutes"); 

app.get('/api/ping', (req, res) => {   // 7
  res.json({ message: 'pong', time: new Date() }); // 8
});

app.use("/api",registerRoutes);


app.listen(PORT, () => {               
  console.log(`Backend running on http://localhost:${PORT}`);
});
