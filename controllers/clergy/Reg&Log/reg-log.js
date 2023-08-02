const express = require('express')
const AuthModel = require('../../../models/clergy/Register/register')
const {StatusCodes} = require('http-status-codes')



const Register = (req, res)=>{

    res.send('reg')
}


const Login = (req, res)=>{

    res.send('Log')
}


module.exports = {Register, Login}