import mongoose,{Schema} from "mongoose"

const projectSchema = new Schema({
    title : {
        type : String
    },
    description : {
        type : String
    },
    image : {
        type : String
    },
    category : {
        type : String
    },
    link : {
        type : String
    }
})

export const Project = mongoose.model("Project",projectSchema)