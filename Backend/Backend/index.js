
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5172;
const URI = process.env.MongoDBURI;

app.use(cors());
app.use(express.json());

const connectToMongoDB = async () => {
   try{
    await mongoose.connect(URI)
    console.log("Connected to MongoDB");
    
   }catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); 
   }
};

app.use("/book", bookRoute);
app.use("/user", userRoute);

const startServer = async () => {
    await connectToMongoDB();

    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
};

startServer();

