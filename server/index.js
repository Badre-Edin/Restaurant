const { parseAsync } = require('@babel/core');
const express = require('express');
const { save, User } = require('../database/index');


let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json())

app.post('/test', function (req, res) {
  const newSave = {
    username: req.body.username,
    phone: req.body.phone,
    table: req.body.table,
    time: req.body.time
  }
  save(newSave)
  res.send(newSave)
})
app.get('/test', function (req, res) {
  // var myRes={
  //   username: req.params.username,
  //   phone:req.params.phone,
  //   table:req.params.table,
  //   time:req.params.time
  // }
  User.find({})
    .then(model => {
      res.json(model)
    }).catch(error => {
      res.json(error)
    })

});
app.delete("/test/:id", async(req,res)=>{
  const id =req.params.id
  await User.findByIdAndDelete(id).exec();
  res.send('Reservation deleted')
}
)



let port = 3000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
