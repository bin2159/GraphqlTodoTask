import mongoose from "mongoose";
const TaskSchema=new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

export default mongoose.model("task",TaskSchema)