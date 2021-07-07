const express = require('express');
const app = express();

// static files
app.use(express.static('public'));

//Routes
app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/index.html');
});

//connect to port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
