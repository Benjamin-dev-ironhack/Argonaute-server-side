const express = require('express')
const router = express.Router()
let ArgonauteModel = require('../models/Argonaute')

router.get('/argonautes', (req, res) => {
     ArgonauteModel.find()
          .then((argonautes) => {
               res.status(200).json(argonautes)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })         
})


router.post('/create', (req, res) => {  
    const {name, description} = req.body;
    ArgonauteModel.create({name: name, description: description})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })  
})


router.get('/argonautes/:argonauteId', (req, res) => {
     ArgonauteModel.findById(req.params.argonauteId)
     .then((response) => {
          res.status(200).json(response)
     })
     .catch((err) => {
          res.status(500).json({
               error: 'Something went wrong',
               message: err
          })
     }) 
})


router.patch('/argonautes/:argonauteId', (req, res) => {
    let id = req.params.id
    const {name, description} = req.body;
    ArgonauteModel.findByIdAndUpdate(id, {$set: {name, description}}, {new: true})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               console.log(err)
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          }) 
})

router.delete('/argonautes/:argonauteId', (req, res) => {
     ArgonauteModel.findByIdAndDelete(req.params.id)
           .then((response) => {
                res.status(200).json(response)
           })
           .catch((err) => {
                res.status(500).json({
                     error: 'Something went wrong',
                     message: err
                })
           })  
 })


module.exports = router;