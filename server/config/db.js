import mongoose from "mongoose";

const connectDb=async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URL) 
       console.log('MongoDb is connected!');
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}
export default connectDb