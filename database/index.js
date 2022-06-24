const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher',{
 useNewUrlParser:true,
 useCreateIndex:true,
 useUnifiedTopology:true
}).then(()=>{
  console.log("connected");
}).catch((err)=>{
  console.log('not connected',err);
})

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true, lowercase: true, unique: true},
    password: String
  })

  