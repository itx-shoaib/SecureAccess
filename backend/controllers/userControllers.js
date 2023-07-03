//  @desc   :  Auth user /set token
//  @Route  :  POST /api/users/auth
//  @access :  Public
const authUser = (req,res)=>{
    res.status(200).json({message:"Auth Test"})
}

//  Exporting the routes
export {
    authUser
}