import cors from "cors";
import express from "express";
import nodemailer from "nodemailer";

var app=express();
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

app.post('/',async (req,res)=>{
     const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false, // use SSL
          auth: {
               user: process.argv[0],
               pass: process.argv[1],//Set this up in Google Account. It's the App Password option
               }
          })

     const mailOptions = {
          from: `${process.argv[0]}@gmail.com`,
          to:  `${process.argv[0]}@gmail.com`,
          cc: [req.body.email],
          subject: `${req.body.name} sent an email`,
          text: req.body.MMess
     }
     const info=await transporter.sendMail(mailOptions).catch((error)=>(400));
     if(info!=400){
          return res.status(200).send("200");
     }
     else{
          return res.status(200).send("406");
     }
     return res.send("TEMMIE!")
});


app.listen(5000);
