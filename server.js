const express = require('express')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const ContUser = require('./routes/contact.route.js')


mongoose.connect(
    "mongodb+srv://harshduggar7:harshduggar7@cluster0.vc96b.mongodb.net/ContactForm"
).then(() => {console.log('MONGOBD CONNECTED')}).catch((error)=>{console.log(error)})

const app = express()
const PORT = process.env.PORT || 8000;

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