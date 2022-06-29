const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/resto', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("connected");
}).catch((err) => {
  console.log('not connected', err);
})
let userSchema = mongoose.Schema({
  username: String,
  phone: Number,
  date: Date,
  table: Number,
  time: String
});
let User = mongoose.model('User', userSchema);
let save = (data) => {
  let user = new User({
    username: data.username,
    phone: data.phone,
    date: Date.now(),
    table: data.table,
    time: data.time
  })

  return User.insertMany(user)
}
// let find = () => {
//   let finduser = new User
//  return User.findOne(finduser)

// }
module.exports = { save,User };