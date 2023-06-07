const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config();
const userRoutes = require("./routes/user");


const app = express();
const port = process.env.PORT || 3000;

// Habilitar CORS
app.use(cors());

app.use(express.json());
app.use('/api', userRoutes);


app.get("/", (req, res) =>{
  res.send("Welcome to my API");
})

//Mongodb conection
mongoose.connect(process.env.MONGOBD_URI, console.log("Connected"));



app.listen(port, () => {
  console.log(`Server running on port ${port}`);

});
