const Contact = require('../models/contact.model.js')

const ContactUser = async(req,res)=>{
    const {userName,email,subject,message} = req.body;

    try {

        const newMessage = new Contact({
            userName,
            email,
            subject,
            message
        })
        await newMessage.save();

        res.status(200).json({
            success:true,
            message:"message sent successfully"
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:'error while sending message'
        })
        
    }
}

module.exports = {ContactUser}