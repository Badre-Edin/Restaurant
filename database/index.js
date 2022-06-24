const mongoose = require('mongoose');


let userSchema = mongoose.Schema({
    name: String,
    email: {type: String, required: true, lowercase: true, unique: true},
    password: String
  })
let foodSchema=mongoose.Schema({
    name: String,
    price:String,
	description :String
})

  let User = mongoose.model('User', userSchema);
  let Food=mongoose.model('Food',foodSchema)

let save = (data) => {
  let user = new User({
    name:data.name,
    email:data.email,
    password:data.password
  })

  return user.insertMany(data)
}

module.exports.save = save;
  