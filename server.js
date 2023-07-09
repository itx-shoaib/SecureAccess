import express from "express";
import dotenv from "dotenv"; //this library is used to config .env and use in server
import {errorHandler,notFound} from "./middlewares/errorMiddlewares.js"
import {database} from "./database/index.js";

dotenv.config();
database()

const port = process.env.PORT || 5000;

// Importing Routes below
import userRoutes from "./routes/userRoutes.js";

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/users",userRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Making these middlewares to be in last because they throw error if place before routes
app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>console.log(`Server is running on port ${port}`))