const connectToMongo = require('./db')
const express = require('express')
connectToMongo()
const cors = require('cors')
const app = express()
const port = 5000;

app.use(express.json());
app.use(cors());


//Available Routes
app.use('/api/auth',require('./routes/auth')) 

app.get('/',(req,res) =>{
  res.send("hlo");
})

app.listen(port, '0.0.0.0', () => { 
  console.log(`iNoteBook app listening on port ${port}`)
}) 