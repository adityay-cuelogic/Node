var express = require('express');
const mongoose =  require("mongoose");
const userModel =  require("./model/userModel");
const userActivityModel =  require("./model/UserAcivityModel");
const bcrypt = require("../Utility/bycrypt");
const jwt = require("jsonwebtoken");
const getDate = require("../Utility/getSubtractedDate");
const Joi = require("joi");
const dotenv = require("dotenv").config();

const  userSignup = ( req, res ) => {
    let data  =  req.body;

    data['_id'] = new mongoose.Types.ObjectId();    
    
    bcrypt.encryptData( data['password'] )
    .then( response => {

        data['password'] = response;
        const objModel = new userModel(data); 
        objModel.save()
        .then( () => {
            let objUserActivityModel = new userActivityModel({
                userName: data.userName,
                lastLogin: null
            });

            objUserActivityModel.save()
            .then( () => res.status(200).json({
                success: true,
                message: 'User has been created successfully'
            }) )
            .catch( error => res.status(400).json({
                success: false,
                message: error.message
            }) )

            
        } )
        .catch(error => {
            res.status(400).json({
                success: false,
                message: error.message
            })
        });
    } )
    .catch( error => {
        res.send(400).json({
            success: false,
            message: error
        })
    } )
}

const login = ( req, resp ) => {
    bcrypt.compare( req.body )
    .then( () => {
        let token = jwt.sign({username: req.body.userName},
            process.env.secret,
            { expiresIn: '24h' // expires in 24 hours
            }
          );
          return token;
          
    } )
    .then( ( token ) => {
       
        userActivityModel.updateOne({
            userName: req.body.userName
        },{$set: { "lastLogin" : new Date() }}
        )
        .then( () => resp.status(200).json({
            success: true,
            message: 'Authentication successful!',
            token: token
          }) )
        .catch( error => resp.status(500).json({
            success: false,
            message: error
        }) )
          
    } )
    .catch(error => 
        resp.status(500).json({
            success: false,
            message: error
        })
    )
    
}

const getUserNotLoggedIn = ( req, resp ) => {
    userActivityModel.where({
        lastLogin: {$lte: getDate.getSubtractedDate()}
    })
    .then( response => {
        resp.status(200).json({
            success: true,
            message: response
        })
    } )
    .catch( error =>  resp.status(500).json({
        success: false,
        message: error
    }) )
}

const getUsersList = ( req, res ) => {
    userActivityModel.find()
    .then( response => {
        res.status(200).json({
            success: true,
            message: response
        })
    } )
    .catch( error =>  resp.status(500).json({
        success: false,
        message: error
    }) )
}

const updateUserByName = ( req, res ) => {

    userModel.updateOne({
        userName: req.params.userName
    }, {
        $set: {
            address: req.body.address,
            age: req.body.age
        }
    })
    .then( response => {
        res.status(200).json({
            success: true,
            message: response
        })
    } )
    .catch( error =>  resp.status(500).json({
        success: false,
        message: error
    }) )
}

const getUserByName = ( req, res ) => {
console.log("req = ", req.decoded);
    userActivityModel.where({
        userName: req.params.userName
    })
    .then( response => {
        res.status(200).json({
            success: true,
            message: response
        })
    } )
    .catch( error =>  resp.status(500).json({
        success: false,
        message: error
    }) )
}

module.exports.userSignup = userSignup;
module.exports.login = login;
module.exports.getUserNotLoggedIn = getUserNotLoggedIn;
module.exports.getUserByName = getUserByName;
module.exports.getUsersList = getUsersList;
module.exports.updateUserByName = updateUserByName;