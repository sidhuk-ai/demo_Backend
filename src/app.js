import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN, // Tells which frontend URL can access this backend.
    credentials:true
}))

app.use(express.json({limit:"20kb"}));
app.use(express.urlencoded({extended:true,limit:"20kb"}))
app.use(express.static("public"))
app.use(cookieParser());

//Importing Router
import userRouter from "./routes/user.routes.js";
// routes decleration
app.use("/api/v1/users",userRouter);

export { app }