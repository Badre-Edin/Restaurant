const mongoose = require('mongoose');


let foodSchema=mongoose.Schema({
    name: String,
    price:String,
	description :String
})
let Food=mongoose.model('Food',foodSchema)

let saveFood = (data) => {
    let food = new Food({
      name:data.name,
      price:data.price,
      description:data.description
    })
  
    return food.insertMany(data)
  }
  
  module.exports.saveFood = saveFood;
    