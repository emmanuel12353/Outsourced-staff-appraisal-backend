const mongoose = require('mongoose');
const connectDB = require('../Data/config');
// const validator = require('validator')

const SupervisorSchema = new mongoose.Schema(
  {
    firstname: {
        type: String,
        required: true,
        min: 2,
        max: 30,
        trim: true
      },
      lastname: {
        type: String,
        required: true,
        min: 2,
        max: 30,
        trim: true
      },
      email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
        lowercase: true,
        // validate(value) {
        // if(!validator.isEmail(value)) {
        //   throw new error ('email is invalid')
        // }
        
      },
      solid:{
        type: Number,
        required: true,
        min: 3,
        max: 4,
        trim: true
            
      
      },
      password:{
        type: String,
        required: true,
        min: 5,
      },
      city: String,
      state: String,
      country: String,
      jobrole: String,
      phoneNumber: String,
      role: {
        type: String,
        required: true,
        min: 5,
      },
    
    },
  { timestamps: true }
);

module.exports = mongoose.model("Supervisor", SupervisorSchema)