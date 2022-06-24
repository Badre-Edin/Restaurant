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

let userSchema = mongoose.Schema({
    userId:{type:Number,unique:true},
    name: String,
    email: {type: String, required: true, lowercase: true, unique: true},
    password: String
  })

  let User = mongoose.model('User', userSchema);

let save = (data) => {
  let user = new user({
    userId:data.id,
    name:data.name,
    email:data.email,
    password:data.password
  })
  return User.insertMany(data)
}

module.exports.save = save;
  