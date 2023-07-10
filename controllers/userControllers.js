import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import generateToken from "../utils/generateToken.js"

//  @desc   :  Auth user /set token
//  @Route  :  POST /api/users/auth
//  @access :  Public
const authUser = asyncHandler( async (req,res)=>{
    const { email,password } = req.body;

    if(!email || !password){
        res.status(400);
        throw new Error("Email or password missing!")
    }

    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        generateToken(res, user._id)

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
})


//  @desc   :  logout user
//  @Route  :  POST /api/users/logout
//  @access :  Public
const logoutUser = asyncHandler( async (req,res)=>{
    res.cookie('jwt','',{
        httpOnly:true,
        expires: new Date(0)
    })
    res.status(200).json({message:"User Logout Sucessfully"})
})


//  @desc   :  Register user
//  @Route  :  POST /api/users
//  @access :  Public
const registerUser = asyncHandler( async (req,res)=>{
    const {email,name,password} = req.body
    const userExist = await User.findOne({email})

    if(userExist){
        res.status(400)
        throw new Error("User already exist");
    }

    const user = User.create({
        email, name , password
    })

    if(user){
        generateToken(res,user._id);
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email: user.email
        })
    }
    else{
        res.status(400)
        throw new Error("Invalid user data")
    }
    // res.status(200).json({message:"Register user"})
})


//  @desc   :  Get user profile
//  @Route  :  GET /api/users/profile
//  @access :  Private
const getUserProfile = asyncHandler( async (req,res)=>{
    res.status(200).json({message:"User Profile"})
})


//  @desc   :  Update USer Profile
//  @Route  :  PUT /api/users/profile
//  @access :  Private
const updateUserProfile = asyncHandler( async (req,res)=>{
    res.status(200).json({message:"Update User Profile"})
})

//  Exporting the routes
export {
    authUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    registerUser
}