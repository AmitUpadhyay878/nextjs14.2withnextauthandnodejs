import mongoose from 'mongoose'

const MONGODB_URL = process.env.MONGODB_URI;

const connect=async()=>{
    const connectionState = mongoose.connection.readyState;

    if(connectionState ===1){
        console.log("DB Already Connected");
            return;
    }
    if(connectionState ===2){
        console.log("connecting....")
        return;
    }

    try{

        mongoose.connect(MONGODB_URL!, {
            dbName:"nextjs14withmongoatlas",
            bufferCommands:true
        })
        console.log("DB connected")

    }catch(error:any){
            console.log("DB Connection Error: ",error);
            throw new Error("error: ",error)
            
    }
}

export default connect;