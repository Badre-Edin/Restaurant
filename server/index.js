const express = require('express');
const { save } = require('../database/index');

let app=express();

app.use(express.static(__dirname+'/../client/dist'));
app.use(express.json());

app.post('/',function(req,res){
    
})
app.get('/',function(req,res){

})