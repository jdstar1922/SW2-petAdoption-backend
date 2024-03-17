//administracion de la conexion a la base de datos
import mongoose from "mongoose";

export const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI); 
        console.log("MongoDB is connected");
    }catch(error){
        console.error(error);
    }   
}