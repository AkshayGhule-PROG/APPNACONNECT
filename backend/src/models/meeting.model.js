import mongoose ,{Schema}  from "mongoose";


const meetingSchema = new Schema({
    name:{type:String, required:true  },
    username:{type:String, required:true ,unique:true},
    password:{type:String, required:true  },
    token:{type:String, required:true  },
})


const Meeting = mongoose.model("Meeting",meetingSchema)

export {Meeting};