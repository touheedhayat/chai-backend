import dotenv from "dotenv"
import express from 'express'; 
import connectDB from "./db/index.js"

const app = express()

dotenv.config(
   { path: `./env`
})

connectDB()
.then(()=>{
   app.on("error",()=>{
      console.log("Error in connectig",error)
   })
   
   app.listen(process.env.PORT||8000, ()=>{
      console.log(`Server running on PORT ${process.env.PORT}`)
      
   })

})

.catch((err)=>{
console.log("error in connecting mongoDB", err)
})




// import mongoose from "mongoose";
// import { DB_Name } from "./constants.js";


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

