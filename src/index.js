import dotenv from 'dotenv';
import connectDB from './db/db.js';
import { app } from './app.js';

dotenv.config({
    path:'./env'
})

const PORT = process.env.PORT || 3000

connectDB()
.then(()=>{
    app.listen(PORT)
})
.catch((err)=>{
    console.error('Connection failed!!! ',err);
});