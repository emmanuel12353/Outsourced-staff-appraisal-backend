const { JsonWebTokenError } = require('jsonwebtoken');
const AppError = require('../Utils/apperror');
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Supervisor = require('../Model/supervisor');
const signedToken = require('../Utils/signedToken')

// const signedToken = id => {
//     return JWT.sign({id: id}, process.env.SECRET_KEY,{
//       expiresIn: process.env.JWT_EXPIRES_IN
//     })
// }

exports.supervisorSignup = async(req, res, next)=>{
  // if(!req.body){
  //   return next(new AppError('bad request', 400))
  // }
  // if(!req.body.email || !req.body.password) return next(new AppError('please provide a valid email and password', 400))
  // if(!req.body.email) return next(new AppError('please provide a valid email', 400))
  // if(!req.body.password) return next(new AppError('please provide a valid password', 400))
  // if(!req.body.solid) return next(new AppError('please provide your business office soi id', 400))
  
  const newSupervisor = await new Supervisor({
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        email: req.body.email,
                        solid: req.body.solid,
                        city: req.body.city,
                        state: req.body.state,
                        country: req.body.state,
                        phoneNumber: req.body.phoneNumber,
                        Appraisal: req.body.Appraisal,
                        staff: req.body.staff,


  })
  const token = signedToken(newSupervisor._id);
 await newSupervisor.save()
  res.status(201).json({
    status: 'success',
    token,
    data: {
      supervisor: newSupervisor
    }
  })
}




exports.supervisorlogin = async(req, res, next)=> {
    console.log('it is working');
    // res.send('i  still dey try am');
    const email = req.body.email;
    const password = req.body.password;

    console.log(email, password)
   if(!email || !password) return next(new AppError('please provide a valid email and password', 400))


// check if the user exist and the password is correct

const existingsuvisor = await Supervisor.findOne({email: email}).select('+password')
if(!existingsuvisor) return next(new AppError('user does not exist', 400))

  //  // compare passwords
const correct = existingsuvisor.correctPassword(password, existingsuvisor.password)
    
 

    if(!correct){
        return next(new AppError('username or password has been wrongly filled', 400))
    }
  const token = signedToken(existingsuvisor.id)
  res.status(200).json({
    status: 'success',
    token
  })
  next()
}