const mongoose = require('mongoose');


let userSchema = mongoose.Schema({
    name: String,
    email: {type: String, required: true, lowercase: true, unique: true},
    password: String
  })


  let User = mongoose.model('User', userSchema);
  

let saveUser = (data) => {
  let user = new User({
    name:data.name,
    email:data.email,
    password:data.password
  })

  return user.insertMany(data)
}

module.exports.saveUser = saveUser;
  