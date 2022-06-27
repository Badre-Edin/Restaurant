const { parseAsync } = require('@babel/core');
const express = require('express');
const { save } = require('../database/index');

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
app.get('/test/:id', async(req, res)=> {
 const getUser=await ({_id:req.params.id})
 res.send(getUser)
});
 

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
