import express from 'express'
import mongoose from 'mongoose';
import cookieParser from'cookie-parser'
import cors from 'cors';
import 'dotenv/config'
import ContUser from './routes/contact.route.js'


mongoose.connect(
    `${process.env.MONGODB_URL}`
).then(() => {console.log('MONGOBD CONNECTED')}).catch((error)=>{console.log(error)})

const app = express()
const PORT = process.env.PORT;

// writing corrrsss
app.use(
    cors({
        origin: 'http://localhost:5173',
        methods:['GET','POST','PUT','DELETE'],
        allowedHeaders:[
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        credentials: true
    })
)
app.use(cookieParser());
app.use(express.json());
app.use('/api/contact',ContUser);

app.listen(PORT,()=> console.log(`server is running on :${PORT}`))