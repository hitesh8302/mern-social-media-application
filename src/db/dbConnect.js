import mongoose from "mongoose";
import  {DB_NAME}  from "/Users//hi/Desktop/backendMERN/src/constants.js";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch(error){
        console.log("Mongo connection error", error);
        process.exit()
        
    }
}
export default connectDB