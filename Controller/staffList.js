// import staff from "../Model/staff"

const staff = require("../Model/staff");

const staffList = async(req, res) => {
    res.send('Hello, Express!');
    console.log('just testing')
    const staffList = await staff.find();
  res.status(200).json({
    status: 'success',
    data: {
      staffList
    }
  })

  };
  
  module.exports = staffList;
