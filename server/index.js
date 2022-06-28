const { parseAsync } = require('@babel/core');
const express = require('express');
const { save,find } = require('../database/index');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json())

app.post('/test', function (req, res) {
  const newSave ={
    username: req.body.username,
    phone:req.body.phone,
    table:req.body.table,
    time:req.body.time
  }
  save(newSave)
  res.send(newSave)
})
app.get('/test/:name', function(req, res){
  var username={
    name:req.params.name
  }
  find(username)
  res.end()
});
app.delete('/test',function(req,res){
  
})
 

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
