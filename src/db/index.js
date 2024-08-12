import mongoose from "mongoose";

import { DB_Name } from "../constants.js";
const connectDB= async ()=>{
    try {
     const connectionInstance =await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
     console.log(`Connect ho gaya mongodb ${connectionInstance.connection.host}`);



    } catch (error) {

        console.log("Error in Database connection", error)
        process.exit(1)
        
    }
}

export default connectDB