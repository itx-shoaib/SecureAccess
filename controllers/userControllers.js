import asyncHandler from "express-async-handler"

//  @desc   :  Auth user /set token
//  @Route  :  POST /api/users/auth
//  @access :  Public
const authUser = asyncHandler( async (req,res)=>{
    res.status(200).json({message:"Auth Test"})
})


//  @desc   :  logout user
//  @Route  :  POST /api/users/logout
//  @access :  Public
const logoutUser = asyncHandler( async (req,res)=>{
    res.status(200).json({message:"Logout Test"})
})


//  @desc   :  Register user
//  @Route  :  POST /api/users
//  @access :  Public
const registerUser = asyncHandler( async (req,res)=>{
    res.status(200).json({message:"Register user"})
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