
import express from "express";
import dotenv from "dotenv"
import connectDB from "./db/index.js";
const app = express();

dotenv.config({
    path : './env'
})

connectDB()
.then(()=>{
    app.on("error", (error)=>{
        console.log("ERR: ", error);
        throw error;
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running on port ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("Mongo db Connection Failed !!!", error)
})













// ;(async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.log("ERRR: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log("app is listening on port", process.env.PORT)
//         })
//     } catch (error) {
//         console.log("Error",error)
//     }
// })()