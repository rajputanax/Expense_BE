import mongoose from "mongoose";

const registeration = new mongoose.Schema({
name: String , email : {
    type : String ,
    unique : true
}
, lastName : {
    type : String ,
}
, password :{
    type : String ,
}



} , {timestamps:true})
export default mongoose.model("user" , registeration);