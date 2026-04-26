import mongoose from "mongoose";

// mongoose.connect(process.env.MONGO_URI)

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDB Connected");
        
    }catch(error){
        console.error("❌ Mongo DB Error", error);
        process.exit(1);
    }
}

export default connectDB;