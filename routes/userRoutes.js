import express from "express";
const router = express.Router()

// Importing our controllers
import { 
    authUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    registerUser
} from "../controllers/userControllers.js";
import { protect } from "../middlewares/authMiddlewares.js";

// making the routes
router.post("/auth", authUser);
router.post("/", registerUser);
router.post("/logout", logoutUser);
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile)

export default router;