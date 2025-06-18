import cookieParser from "cookie-parser"
import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import connectDb from "./utils/db.js"
import userRouter from "./routes/user.routes.js"

dotenv.config({})
const app =  express()


app.get("/home",(req,res) => {
    return res.status(200).json({
        message : "I am coming from backend",
        success : true
    })    
})

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())

const corsOptions = {
    origin : process.env.FRONTEND_URL,
    credentials : true
}

app.use(cors(corsOptions))

app.use("/api/v1/user",userRouter)

const PORT = process.env.PORT;

app.listen(PORT,() => {
    connectDb()
    console.log(`Server Running On Port ${PORT}`);
    
})