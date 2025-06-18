import { User } from "../models/user.model.js";

export const createUser =  async (req,res) => {
    try {
        const {fullName,email,phoneNumber,message,subject} = req.body;
        if(!fullName || !email || !phoneNumber || !message || !subject){
            return res.status(404).json({
                message : "Please Fill All The Fields",
                success : false
            })
        }
        const existingUser = await User.findOne({email})
        if(existingUser){
            console.log("ALREADY REGISTERED");
            
            return res.status(401).json({
                message : "You Have Already Registerd With this email",
                success : false
            })
        }
        const user = await User.create({
            fullName,
            email,
            phoneNumber,
            message,
            subject
        })

        if(!user){
            return res.status(400).json({
                message : "Something Went Wrong",
                success : false
            })
        }

        return res.status(201).json({
            message : "Message Sent Successfully and You Will Be Contacted in the next 24 hours",
            success : true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : "Internal Server Error",
            success : false
        })
        
    }
}