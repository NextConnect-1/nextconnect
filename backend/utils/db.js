import mongoose from "mongoose"

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDb Connected Successfully");
        
    } catch (error) {
        console.log(error);
        
    }
}

export default connectDb