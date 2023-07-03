import express from "express";
import dotenv from "dotenv"; //this library is used to config .env and use in server
dotenv.config();

const port = process.env.PORT || 5000;

const app = express()

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port,()=>console.log(`Server is running on port ${port}`))