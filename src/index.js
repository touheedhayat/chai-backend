import dotenv from "dotenv"
// import mongoose from "mongoose";
import connectDB from "./db/index.js"
dotenv.config(
   { path: `./env`
})

connectDB()




// import mongoose from "mongoose";
// import { DB_Name } from "./constants.js";
// import express from 'express';

// const app = express();

// (
//     async ()=>{ 
//         try {
//       await  mongoose.connect(`${process.env.MOONGODB_URI}/${DB_Name}`)
   
//       app.on("error",(error)=>{
//         console.log("Error in connectig",error)
//         // throw error
//       })
      
//       app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on port${process.env.PORT}`)
//       })
//         } catch (error) {
//             console.log("There's an error ",error)
//             // throw error
//         }
// }
// )

