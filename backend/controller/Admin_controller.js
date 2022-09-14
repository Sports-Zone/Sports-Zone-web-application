console.log("backend called");
const {isEmpty}  = require('../utils/is_empty');
const Joi = require('@hapi/joi');
const JWT = require('jsonwebtoken');
const conn = require('../service/db_service');
const {CHECK_EMAIL,REGISTER_USER, DELETE_USER} = require('../query/Admin');
const { SIGNUP_MODEL} = require('../model/Admin');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const AppError = require('../utils/appError');
const CLIENT_URL = "http://localhost:3000/";




exports.Create_Accounts = (req,res,next)=>{
 
    if( isEmpty( req.body )) return next(new AppError("form data not found ",400));
    
    try{
      console.log("hyyo")
        const { error } = SIGNUP_MODEL.validate(req.body);

        if( error ) return next(new AppError(error.details[0].message,400)) ;

        conn.query(CHECK_EMAIL , [req.body.email], async(err, data, feilds) =>{
           if( err ) return next(new AppError(err,500)) ;
           if( data.length ) return  next(new AppError("Email already used!",400)) ;


           
           const salt = await bcrypt.genSalt(10);
           const hashedValue = await bcrypt.hash(req.body.pwd, salt);
           const email_token = crypto.randomBytes(64).toString('hex');

  

           conn.query(REGISTER_USER, [ [ hashedValue, req.body.email , req.body.user, req.body.type,req.body.email, email_token, req.body.user ,0]], (err,data,feilds)=>{
            if( err ) return next(new AppError(err,500));

            res.status(201).json({
               data: "User Registration Success!"
            })

           })
  
          
        })
     }
     catch( err )
     {
        res.status(500).json({
           error: err
        })
     }
}

{/* <a href="http://localhost:3000/SignUp/{$token}">CLICK TO ACTIVATE YOUR ACCOUNT</a>
                  <a href="' . CLIENT_URL . 'SignUp/activation' . '/' . {[req.body.email]} . '/' . {$token} . '">CLICK TO ACTIVATE YOUR ACCOUNT</a>'; */}


 
                  
                  exports.Delete_Accounts = (req,res,next)=>{
                  //  console.log("sas")
                  //    if( isEmpty( req.body )) return next(new AppError("form data not found ",400));
                  //    console.log(req.body.email)
                  //    try{
                      
                  //           conn.query(DELETE_USER,[req.body.email ], (err,data,feilds)=>{
                  //            if( err ) return next(new AppError(err,500));
                 
                  //            res.status(201).json({
                  //               data: "User Delete Success!"
                  //            })
                 
                  //           })
                   
                           
                      
                  //     }
                  //     catch( err )
                  //     {
                  //        res.status(500).json({
                  //           error: err
                  //        })
                  //     }


                  
                  var SelectQuery= "UPDATE user SET is_deleted=0 WHERE Email =email";
 
                  console.log(req.body)
                   
                         conn.query(SelectQuery, function (err,result){
                          if( err ) {
                           console.log(err);
                           res.send("Unable to get the comments");
                          }
                          else{
                           res.send("user delete");
                          }
              
                         })


                 }






       
                 exports.View_Accounts = (req,res,next)=>{

                  var SelectQuery= "SELECT * FROM user";
 
                  
                   
                         conn.query(SelectQuery, function (err,result){
                          if( err ) {
                           console.log(err);
                           res.send("Unable to get the comments");
                          }
                          else{
                           res.send(result);
                          }
              
                         })

                   
                  }