const { verify } = require("jsonwebtoken");
const catchAsync = require("../middleware/catchAsync")
const Userservice =  require("../service/user.service")
const ErrorHandler=require("../utils/errorHandler")


///for create account
exports.createAccount=catchAsync(async(req,res,next)=>{
    const {name , email , password} = req.body;
     ///Checking if any fields are empty
    if(!name || !email || !password){
     throw new Error("Please enter the required fields",404)
      }
    const user = await  Userservice.createAcc(name,email,password);
    if(!user){
      throw new Error('something went wrong while creating user');
    }
    return res.status(201).json({
      message:'user created successfully',
      error:false,
      data:user
    })
 })
   
//For verify account
exports.verifyacc=catchAsync(async(req,res,next)=>{
    Userservice.verify(req,res,next)
})



//Login for user

exports.loginforUser=catchAsync(async(req,res,next)=>{
    const { email, password } = req.body;

   Userservice.login(email,password,req,res,next)
 });

//Logout user

exports.logoutforuser = catchAsync(async (req, res, next) => {
  Userservice.logout(req,res,next)
});
    

// Forgot Password
exports.forgotPassword = catchAsync(async (req, res, next) => {
Userservice.forgotPassword(req,res,next)
});

// Reset Password
exports.resetPassword = catchAsync(async (req, res, next) => {
Userservice.resetPassword(req,res,next)
});


//update user Password
exports.updatePassword = catchAsync(async(req,res,next)=>{
  Userservice.updatePassword(req,res,next)
})

//update user profile
exports.updateProfile =  catchAsync(async(req,res,next)=>{
  Userservice.updateUserProfile(req,res,next)
})

//for get user profile

exports.getUserProfile = catchAsync(async(req,res,next)=>{
  
  Userservice.getUser(req,res,next)

});

//exports update user profile





//delete user profile

exports.deleteUserProfile= catchAsync(async(req,res,next)=>{
  
  Userservice.deleteUser(req,res,next)

})