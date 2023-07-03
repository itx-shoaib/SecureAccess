import express from "express";
const router = express.Router()

// Importing our controllers
import { authUser } from "../controllers/userControllers.js";

// making the routes
router.post("/auth", authUser)

export default router;