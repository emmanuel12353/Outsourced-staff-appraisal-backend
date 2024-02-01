const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Data/config');
const staffRoute = require('./Routes/staff')

dotenv.config();
connectDB();
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(staffRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
