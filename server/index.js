const express = require('express');
const {saveUser} = require('../database/user');
const {saveFood} = require('../database/food')
const path = require("path");
const users =require('../client/src/data')
let app=express();

app.use(express.static(__dirname+'/../client/dist'));
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("db is successfully connected");
});

app.set("views", path.join(__dirname, "./client/dist"));
app.use(express.static(path.join(__dirname, "./client/dist")));

app.listen(3000, () => {
  console.log("server is running on port http://localhost:3000");
});


app.post('/data',function(req,res){
users.create(req.body).then((result)=>{
    res.send(result)
})
saveUser(users)
return users
})
app.get("/data", (req, res) => {
    users.find().then((data) => {
      res.send(data);
    });
  });
  app.delete("/data", (req, res) => {
    users.findOneAndRemove({ _id: req.params.id }).then((result) => {
      res.send(result);
    });
  });
  app.put("/data", (req, res) => {
    users.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    }).then((result) => {
      res.send(result);
    });
  });
  